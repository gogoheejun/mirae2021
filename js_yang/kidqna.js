function sendMsg(){
    

    var name = document.getElementById('write__name').value;
    var title = document.getElementById('write__title').value;
    var msg = document.getElementById('write__msg').value;

    // document.getElementById('aa').innerHTML=name+"/"+msg;
    if(!name|| !title|| !msg){
        alert("모든 칸을 입력해주세요~");
        return;
    }
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status==200) //4번이 '배송했다'임...200은 잘완료했다.(404는 없다. 403은 접근권한없다)
        {
            document.getElementById('aa').innerHTML= req.responseText;
            loadMsg();
        } 
    }

    req.open('GET', './js_yang/kidsend.php?name='+name+"&title="+title+"&msg="+msg,true);//항상 제일먼저 해임달보고 문을 열어라!!...//해임달 왈: 어떤방식으로 할까요?GET, 어디로 갈까요?aaa, Asynchronous(비동기)로 하면 true
    req.send();
    
}

var datas;
function loadMsg(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status==200){
    
            datas = req.responseText;
            // document.getElementById('aa').innerHTML = datas;

            //데이터 파싱..여기서 작업해야 비동기작업가능
            document.getElementById('bb').innerHTML="<thead> <tr class='w3-light-grey w3-hover-red'> <th>작성자</th>  <th>제목</th>  <th>작성시간</th>  </tr> </thead>      ";
            
            var rows = JSON.parse(datas);
            rows.forEach((row)=>{
            
                document.getElementById('bb').innerHTML+= "<tr onclick='hideWrite(this.id)' class='w3-hover-blue' id="+row.no+" >"+"<td>"+row.name+"</td>" +
                "<td >"+row.title+"</td>"+
                "<td >"+row.time+"</td>"+
                "</tr>";
                })
            }
        }
    req.open('GET', './js_yang/kidload.php?',true);//항상 제일먼저 해임달보고 문을 열어라!!...//해임달 왈: 어떤방식으로 할까요?GET, 어디로 갈까요?aaa, Asynchronous(비동기)로 하면 true
    req.send();
}

loadMsg();


function hideWrite(clikedId){
    var e = document.getElementById('write__container');
    var e2 = document.getElementById('read');
    if(e.style.display==="none"){
        e2.style.display="block";
    }else{
        e.style.display="none";
        e2.style.display="block";
    }
    showMsg(clikedId);
}

function showMsg(clikedId){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status==200){
            console.log(req.responseText);
            var row = JSON.parse(req.responseText);
            document.getElementById('read__name').innerHTML = row.name;
            document.getElementById('read__title').innerHTML = row.title;
            document.getElementById('read__msg').innerHTML = row.msg;

        }
    }
    req.open('GET', './js_yang/kidloadMore.php?no='+clikedId,true);//항상 제일먼저 해임달보고 문을 열어라!!...//해임달 왈: 어떤방식으로 할까요?GET, 어디로 갈까요?aaa, Asynchronous(비동기)로 하면 true
    req.send();
}