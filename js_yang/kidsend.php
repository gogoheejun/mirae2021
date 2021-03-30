<?php

    header('Content-Type:text/html; charset=utf-8');

    $name = $_GET['name'];
    $title = $_GET['title'];
    $msg = $_GET['msg'];

    $now = date('Y-m-d H:i:s');

    $conn = mysqli_connect("localhost","alexang","gmlwns1!","alexang");
    mysqli_query($conn,"set names utf-8");

    $sql = "INSERT INTO nikeqna(name, title, time, msg)
        VALUES('$name','$title','$now','$msg')";
    $result = mysqli_query($conn, $sql);

    if($result) echo "$name 님의 게시글이 업로드 되었습니다";
    else echo "실패!";

    
?>