//输出编辑器
function JunUE(){
	var html = '<div class="main layui-clear" style="width:100%;overflow-y:auto;padding:0px;"><div class="wrap"><div class="content detail"><div name="laypage1.2" class="laypage-main"></div><!--显示评论框--><ul class="layui-form jie-form" id="anchor"><li class="layui-form-li"><div class="fly-editbox"><div class="fly-edit" id="editControls"><!--TAB 功能标签--><a title="undo" href="javascript:void(0)"><i class="icon-undo"></i></a><span type="face" id="LAY_face"><i class="iconfont icon-biaoqing"></i>表情</span><span>|</span><span type="code" id="LAY_code"><i class="iconfont icon-daima"></i>代码</span><span>|</span><a title="bold" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>加粗</a><a title="italic" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>倾斜</a><a title="underline" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>下划线</a><a title="strikeThrough" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>删除线</a><span>|</span><a title="justifyLeft" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>左对齐</a><a title="justifyCenter" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>居中</a><a title="justifyRight" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>右对齐</a><div style="width: 100%;height: 6px;float: left;"></div><input id="size" type="text" class="btn-input" style="height:21px; margin-left:10px" value="4"><a title="size" href="javascript:void(0)">字体大小</a><input id="family" type="text" class="btn-input" style="height:21px" value="微软雅黑"><a title="family" href="javascript:void(0)">字体样式</a><input id="color" type="text" class="btn-input" style="height:21px" value="#000000"><a title="color" href="javascript:void(0)">字体颜色</a><div style="width: 100%;height: 6px;float: left;"></div><input id="backg" type="text" class="btn-input" style="height:21px;margin-left: 10px;" value="#ffffff"><a title="backg" href="javascript:void(0)"> 背景颜色</a><input id="url" type="text" class="btn-input" style="width:270px; height:21px;" value="http://www.junphp.com"><a class="Jun-Url" title="url" href="javascript:void(0)">超链接</a><div style="width: 100%;height: 6px;float: left;"></div><a title="h1" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>h1</a><a title="h2" href="javascript:void(0)"><i class="iconfont icon-shezhi"></i>h2</a><a title="indent" href="javascript:void(0)"><i class="icon-indent-right"></i></a><a title="outdent" href="javascript:void(0)"><i class="icon-indent-left"></i></a><span>|</span><a title="insertUnorderedList" href="javascript:void(0)"><i class="icon-list-ul"></i></a> <a title="insertOrderedList" href="javascript:void(0)"><i class="icon-list-ol"></i></a><span>|</span><a class="file_bottom"><div class="file_top"><input name="pic" id="LAY-pic" type="file"></div><cite class="iconfont icon-tianjia"></cite> 图片上传 </a><span>|</span><a class="file_bottom"><div class="file_top"><input name="vic" id="LAY-vic" type="file"></div><cite class="iconfont icon-tianjia"></cite> 文件上传</a><span></span><span></span><span></span><span id="LAY_tishi"></span></div><div id="LAY_desc" contenteditable></div><input name="content" id="content" type="hidden" value="" /></div></li></ul><div class="layui-layer layui-anim layui-layer-tips layui-edit-face" id="tubiao"><div class="layui-layer-content"><ul id="LAY-editface" class="layui-clear"><li title="得意"><img src="JunUE/images/1.jpg"></li><li title="微笑"><img src="JunUE/images/2.jpg"></li><li title="怒"><img src="JunUE/images/3.jpg"></li> <li title="鄙视"><img src="JunUE/images/4.jpg"></li><li title="大哭"><img src="JunUE/images/5.jpg"></li><li title="憨笑"><img src="JunUE/images/6.jpg"></li><li title="奋斗"><img src="JunUE/images/7.jpg"></li><li tile="惊恐"><img src="JunUE/images/8.jpg"></li><li title="动心"><img src="JunUE/images/9.jpg"></li><li title="大笑"><img src="JunUE/images/10.jpg"></li><li title="可怜"><img src="JunUE/images/11.jpg"></li><li title="瞌睡"><img src="JunUE/images/12.jpg"></li><li title="汗颜"><img src="JunUE/images/13.jpg"></li><li title="快哭了"><img src="JunUE/images/14.jpg"></li><li title="敲打"><img src="JunUE/images/15.jpg"></li><li title="亲亲"><img src="JunUE/images/16.jpg"></li><li title="懵比"><img src="JunUE/images/17.jpg"></li><li title="吐"><img src="JunUE/images/18.jpg"></li><li title="吐舌"><img src="JunUE/images/19.jpg"></li><li title="摇头"><img src="JunUE/images/20.jpg"></li><li title="疑问"><img src="JunUE/images/21.jpg"></li><li title="嘘"><img src="JunUE/images/22.jpg"></li><li title="晕"><img src="JunUE/images/23.jpg"></li><li title="八戒"><img src="JunUE/images/24.jpg"></li></ul></div></div><!--显示评论框--></div></div> </div>';
	document.write(html);	
}


//显示或者隐藏表情
$(function (){
	$('#LAY_face').click(function () {
		var display = $("#tubiao").css("display");
		if(display == 'none'){
			$("#tubiao").css("display",'block');
		}else{
			$("#tubiao").css("display",'none');
		}
	});
});
//添加表情
$(function (){
	$("#LAY-editface img").click(function(){
		var kk = $(this).attr("src");
        var content = $('#LAY_desc').html();
		$('#LAY_desc').html(content+'<img src="'+kk+'">&nbsp;');
		$("#tubiao").css("display",'none');
		$("#LAY_desc").focus();
		layer.msg('添加表情成功！')
　　});
});
//显示代码添加
$(function (){
	$('#LAY_code').click(function () {
		layer.prompt({
		  title: '请输入代码',
		  formType: 2 //prompt风格，支持0-2
		},function(pass){
			var content = $('#LAY_desc').html();
			var re = new RegExp("<","g");
			var pa = pass.replace(re,"&lt;");
			$('#LAY_desc').html(content+'<pre class="prettyprint linenums">'+pa+'</pre><br/>&nbsp;');
			prettyPrint();
			$("#LAY_desc").focus();
			layer.msg('添加代码成功！');
		});
	});
});
//文本编辑器
$(function() {
	$('#editControls a').click(function(e) {
		switch($(this).attr('title')) {
			case 'h1':
			case 'h2':
			case 'size':
				document.execCommand('FontSize', false,$("#size").val());//字体大小
				break;
			case 'family':
				document.execCommand('FontName', false,$("#family").val());//字体类型
				break;
			case 'color':
				document.execCommand('ForeColor', false,$("#color").val());//字体颜色
				break;
			case 'backg':
				document.execCommand('BackColor', false,$("#backg").val());//背景颜色
				break;
			case 'url':
				document.execCommand('CreateLink',false,$("#url").val());//超链接
				break;
			default:
				document.execCommand($(this).attr('title'), false, null);//其它的,如对齐,返回,前进
				break;
		}
	})
});
//当鼠标移开div的时候，将div的内容赋值给隐藏域
$(function() {
	$('#LAY_desc').blur(function(){
		$("#content").val($("#LAY_desc").html());
		$("#LAY_tishi").html('已保存成功!');
		setTimeout(function(){$("#LAY_tishi").html('');},1200);  	
	});
});
//图片上传
$(document).ready(function(){
	$("#LAY-pic").change(function(){
		var data = new FormData();
		$.each($('#LAY-pic')[0].files, function(i, file) {
			data.append('file', file);
		});
		layer.load();
		$.ajax({
			url:'JunUE/php/pic.class.php',//图片上传地址
			type:'POST',
			data:data,
			cache: false,
			contentType: false,
			processData: false,
			success:function(data){
				switch(data){	
			    	case '1': layer.msg('文件大小超过服务器限制', {icon: 2});;
             			break; 
					case '2': layer.msg('文件太大！', {icon: 2});;
						break; 
					case '3': layer.msg('文件只加载了一部分！', {icon: 2});;
						break; 
					case '4': layer.msg('文件加载失败！', {icon: 2});;
						break; 
					case '5': layer.msg('文件不是JPG/GIF/PNG图片！', {icon: 2});;
						break;	
					case '6': layer.msg('移动文件失败！', {icon: 2});;
						break;	
					default:	
					var content = $('#LAY_desc').html();
					$('#LAY_desc').html(content+'<img src="'+data+'"/><br/>&nbsp;');
					$("#LAY_desc").focus();
					layer.msg('上传图片成功！', {icon: 1});			
				}
				
				layer.closeAll('loading');			
			},		
		});	
	});
});
//文件上传
$(document).ready(function(){
	$("#LAY-vic").change(function(){
		var data = new FormData();
		$.each($('#LAY-vic')[0].files, function(i, file) {
			data.append('file', file);
		});
		layer.load();
		$.ajax({
			url:'JunUE/php/vic.class.php',//图片上传地址
			type:'POST',
			data:data,
			cache: false,
			contentType: false,
			processData: false,
			success:function(data){
				switch(data){	
					case '2': layer.msg('文件太大！', {icon: 2});;
						break; 
					case '6': layer.msg('移动文件失败！', {icon: 2});;
						break;	
					default:	
					var content = $('#LAY_desc').html();
					$('#LAY_desc').html(content+'<a href="'+data+'">'+data+'</a><br/>&nbsp;');
					$("#LAY_desc").focus();
					layer.msg('上传文件成功！', {icon: 1});			
				}
				
				layer.closeAll('loading');			
			},		
		});	
	});
});