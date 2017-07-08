$(function(){
	$img = $("#verifyCodebox img");
	$img.remove();
	changeValidCode();
	$("#verifyCodebox a").click(
		function(){
			changeValidCode();
		}
	)
	function changeValidCode(){
		if(document.getElementById("cav")!=null){
			$("#cav").remove();
		}			
		$canvas = $("<canvas id=cav>浏览器不支持canvas，请换个浏览器试试</canvas>");
		$canvas.css({'width':'64','height':'22','vertical-align':'middle'});
		var can = $canvas.get(0);
		cxt = can.getContext('2d');
		cxt.fillStyle="gradient";
		cxt.font='100px Verdana';
		var randInt=rand();
		$canvas.attr("name",randInt);
		cxt.fillText(randInt,25,100);
		$("#iptlogin").after($canvas);
	}	
	function rand(){//生成随机数
		var validCode = "";
		var ch = "";
		for(var i=0;i<4;i++){
			var temp = Math.floor(Math.random()*3);
			switch(temp){
				case 0://大写
					ch = String.fromCharCode(65+Math.floor(Math.random()*26));
					break;
				case 1://小写
					ch = String.fromCharCode(97+Math.floor(Math.random()*26));
					break;
				case 2://数字
					ch = String.fromCharCode(48+Math.floor(Math.random()*10));
					break;
			}
			validCode+=ch;
		}
		return validCode;
	}
	
	$("#usersname").blur(function(){
		var reg=/^[\w]{4,20}$/;
		if(reg.test($(this).val())){
			$(this).next("span").text("");
		}else{
			$(this).next("span").text("输入有误");
		}
	})
	$("#reg_email").blur(function(){
		var reg=/^[^@A-Z]+@[^@A-Z.][^@A-Z]+$/;
		if(reg.test($(this).val())){
			$(this).next("span").text("");
		}else{
			$(this).next("span").text("输入有误");
		}
	})
	$("#password").blur(function(){
		var reg=/^[A-Za-z0-9]{6,16}$/;
		if(reg.test($(this).val())){
			$(this).next("span").text("");
		}else{
			$(this).next("span").text("输入有误");
		}
	})
	$("#reg_passwd_r").blur(function(){
		if($(this).val()==$("#password").val()){
			$(this).next("span").text("");
		}else{
			$(this).next("span").text("密码不一致");
		}
	})
	$("#iptlogin").blur(function(){
		if($(this).val()==$("#cav").attr("name")){
			$(this).nextAll("span").text("");
		}else{
			$(this).nextAll("span").text("验证码输入错误");
		}
	})
})