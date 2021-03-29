<?php

    header('Content-Type:text/html; charset=utf-8');
    $conn = mysqli_connect("localhost","alexang","gmlwns1!","alexang");
    mysqli_query($conn,"set names utf-8");

    $no = $_GET['no'];

    $sql = "SELECT * FROM nikeqna where no = '$no'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);



    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    mysqli_close($conn);

?>