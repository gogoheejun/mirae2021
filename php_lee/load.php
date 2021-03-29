<?php
    header('Content-Type:application/json; charset=utf-8');

    $conn = mysqli_connect("localhost","moondroid","dlek1122!","moondroid");

    mysqli_query($conn, "set names utf8");

    $query = "SELECT * FROM board2  ORDER BY no DESC";

    $result = mysqli_query($conn, $query);

    $rowCnt = mysqli_num_rows($result);

    $rows = array();
    for($i = 0; $i < $rowCnt; $i++){
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC); //한줄을 연관배열로 얻기
        $rows[$i] = $row;
    }

    echo json_encode($rows);
   
    mysqli_close($conn);
?>