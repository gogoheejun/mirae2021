<?php

    header('Content-Type:text/html; charset=utf-8');
    $conn = mysqli_connect("localhost","alexang","gmlwns1!","alexang");
    mysqli_query($conn,"set names utf-8");

    $sql = "SELECT * FROM nikeqna";
    $result = mysqli_query($conn,$sql);

    $row_num = mysqli_num_rows($result);

    //여러줄 읽게 각 줄(row)을 요소로 가지는 빈 인덱스 배열준비
    $rows = array();
    for($i = 0; $i<$row_num; $i++){
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC); //한줄을 연관배열로
        $rows[$i] = $row;
    }

    //2차원 배열 -->json array로 변환
    echo json_encode($rows,JSON_UNESCAPED_UNICODE);

    mysqli_close($conn);


?>