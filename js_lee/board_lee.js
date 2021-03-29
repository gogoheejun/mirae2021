function loaded(){
    $.ajax({
        type:"GET",
        url:"./php_lee/load.php",
        data:"json",
        success: function(data){
            var obj = data;
            var html = "";

            html += "<table style='border-top:1px solid #333333; border-bottom:1px solid #333333; width:100%; margin:0px 50px; margin-bottom:100px;'>"
            html += "<tr style='background-color:#888888;'>";
            html += "<td style='padding: 10px 20px;'>" + 'no' + "</td>";
            html += "<td style='padding: 10px 20px;'>" + '작성자' + "</td>";
            html += "<td style='padding: 10px 20px;'>" + '내용' + "</td>";
            html += "<td style='padding: 10px 20px;'>" + '날짜' + "</td>";
            html += "</tr>";

			
            for (let i = 0; i < obj.length; i++) {
                if(i%2 == 0){
                    html += "<tr style='background-color:#dddddd;'>";
                } else{
                    html += "<tr>";
                }
                html += "<td style='padding: 10px 20px;'>" + obj[i].no + "</td>";
                html += "<td style='padding: 10px 20px;'>" + obj[i].name + "</td>";
                html += "<td style='padding: 10px 20px;'>" + obj[i].msg + "</td>";
                html += "<td style='padding: 10px 20px;'>" + obj[i].date + "</td>";
                html += "</tr>";
            }
            html+="</table>";
            $('#board_table').html(html);
        },
        error:function(e){
        }
    });
}

function writeMsg(){
    open('./board2_lee.html','_self');
}