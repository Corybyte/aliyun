<?php
/**
 *  title      ： 文本编辑器 - 文件上传
 *  team       ： 极站IT 工作室
 *  TMP-auth   ： PHP后端 - 冯俊豪
 *  VP -auth   ： 无
 *  Start-time ： 2016-9-19  13:51
 *  Last-time  ： 2016-9-19  13:51
*/
//var_dump($_FILES);exit;
if($_FILES['file']['size'] > 2000000){ 
   echo 2; 
   exit; 
} 

$today = date("YmdHis"); 
$type = '.'.substr(strrchr($_FILES['file']['name'], '.'), 1);; 
$upfile = 'dwfile/' . $today . $type; 
if(is_uploaded_file($_FILES['file']['tmp_name'])) 
{ 
   if(!move_uploaded_file($_FILES['file']['tmp_name'], $upfile)) 
   { 
     echo 6; 
     exit; 
    } 
} 
echo 'JunUE/php/',$upfile;
?> 