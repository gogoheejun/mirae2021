<?php

    header('Content-Type:text/html; charset=utf-8');

    $name = $_GET['name'];
    $msg = $_GET['msg'];
    $date = date("Y-m-d H:i:s");

    $conn = mysqli_connect("localhost","moondroid","dlek1122!","moondroid");

    mysqli_query($conn, "set names utf8");

    $query = "INSERT INTO board2(name, msg, date) VALUES('$name','$msg','$date')";

    $result = mysqli_query($conn, $query);

    if($result){
        echo "<script language=javascript> open('../board_lee.html','_self');</script>";
    } else {
        echo "isNotExist";
    }

    mysqli_close($conn);


?>