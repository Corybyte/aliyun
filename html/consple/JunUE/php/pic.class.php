<?php
/**
 *  title      ： 文本编辑器 - 图片上传
 *  team       ： 极站IT 工作室
 *  TMP-auth   ： PHP后端 - 冯俊豪
 *  VP -auth   ： 无
 *  Start-time ： 2016-9-19  13:51
 *  Last-time  ： 2016-9-19  13:51
*/

if($_FILES['file']['error'] > 0){ 
   switch($_FILES['file']['error']) 
   { 
     case 1: echo 1; 
             break; 
     case 2: echo 2; 
             break; 
     case 3: echo 3; 
             break; 
     case 4: echo 4; 
             break; 
   } 
   exit; 
} 

if($_FILES['file']['size'] > 1000000){ 
   echo 2; 
   exit; 
} 

if($_FILES['file']['type']!='image/jpeg' && $_FILES['file']['type']!='image/gif' && $_FILES['file']['type']!='image/png'){ 
   echo 5; 
   exit; 
} 

$today = date("YmdHis"); 
$filetype = $_FILES['file']['type']; 
if($filetype == 'image/jpeg'){ 
  $type = '.jpg'; 
} 
if($filetype == 'image/gif'){ 
  $type = '.gif'; 
} 
if($filetype == 'image/png'){ 
  $type = '.png'; 
} 
$upfile = 'upfile/' . $today . $type; 
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