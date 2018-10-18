Code();
var code;
function Code(){
	code = "";
	var codeLength=4;//长度
	var codeStr = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');										
	for(var i = 0;i < codeLength;i ++){
		var codeRondom = Math.floor(Math.random()*62);
		code += codeStr[codeRondom];
	}
	$('#tuyzm').html(code);
}
$("#tuyzm").click(function(){
	Code();
})




var sw=true;

$('.ts7').click(function(){
	var re=/^[\u4e00-\u9fa5]{2,}$/
	var str=$("#place").val();
	if($("#place").val()==''){
		$('.zero').css("display","block")
		$(".zero").html('请选择正确地区')
		sw=false;
	}else if(re.test(str)){
		$('.zero').css("display","none")
		$(".zero").html('正确地区')
		sw=true;
	}else{
		$('.zero').css("display","none")
		$(".zero").html('请选择正确地区')
		sw=false;
	}
})

$('.ts7').click(function(){
	if(sw){
		var re=/^1[34578]\d{9}$/
		var str=$("#phone").val();
		if($("#phone").val()==''){
			$('.one').css("display","block")
			$(".one").html('请输入手机号')
			sw=false;
		}else if(re.test(str)){
			$('.one').css("display","none")
			sw=true;
		}else{
			$(".one").html('请输入正确的手机号码')
			sw=false;
		}
	}
})

$('.ts7').click(function(){
	if(sw){
		var re=$("#tuyzm").html()
		var str=$("#tu").val();
		if($("#tu").val()==''){
			$('.two').css("display","block")
			$(".two").html('请输入图像验证码')
			sw=false;
		}else if(re==str){
			$('.two').css("display","none")
			sw=true;
		}else{
			$(".two").html('图像验证码输入不正确')
			sw=false;
		}
	}
})


$('.ts7').click(function(){
	if(sw){
		var re=$("#tuyzm").html()
		var str=$("#num").val();
		if($("#num").val()==''){
			$('.three').css("display","block")
			$(".three").html('请输入上面的图像验证码')
			sw=false;
		}else if(re==str){
			$('.three').css("display","none")
			sw=true;
		}else{
			$(".three").html('图像验证码输入不正确')
			sw=false;
		}
	}
})



$('.ts7').click(function(){
	if(sw){
		var re=/^\w{8,16}$/
		var str=$("#pwd").val();
		if($("#pwd").val()==''){
			$('.four').css("display","block")
			$(".four").html('请输入密码')
			sw=false;
		}else if(re.test(str)){
			$('.four').css("display","none")
			$(".four").html('输入正确')
			sw=true;
		}else{
			$(".four").html('请输入8-16位密码(包括数字字母下划线)')
			sw=false;
		}
	}
})


$('.ts7').click(function(){
	if(sw){
		var re=/^\w{8,16}$/
		var str=$("#qpwd").val();
		if($("#qpwd").val()==''){
			$('.five').css("display","block")
			$(".five").html('请输入密码')
			sw=false;
		}else if(re.test(str)){
			if(str==$("#pwd").val()){
				$('.five').css("display","none")
				$(".five").html('输入正确')
				sw=true;
			}else{
				$(".five").html('两次输入密码不一致')
				sw=false;
			}
		}else{
			$(".five").html('请输入8-16位密码(包括数字字母下划线)')
			sw=false;
		}
	}
})



function fn0(){
	$("#place").focus(function(){
		if(!($("#place").val()=='')){
			$('.zero').css("display","none")
		}
	})
	$("#place").blur(function(){
		var re=/^[\u4e00-\u9fa5]{2,}$/
		var str=$("#place").val();
		if($("#place").val()==''){
			$('.zero').css("display","none")
//			$(".zero").html('请选择正确地区')
			sw=false;
		}else if(re.test(str)){
			$('.zero').css("display","none")
			$(".zero").html('正确地区')
			sw=true;
		}else{
			$('.zero').css("display","none")
			$(".zero").html('请选择正确地区')
			sw=false;
		}
	})

}
fn0();

function fn1(){
	$("#phone").focus(function(){
		if(!($("#phone").val()=='')){
			$('.phone').css("display","none")
		}
	})
	$("#phone").blur(function(){
		var re=/^1[34578]\d{9}$/
		var str=$("#phone").val();
		if($("#phone").val()==''){
			$('.one').css("display","none")
//			$(".one").html('请输入手机号')
			sw=false;
		}else if(re.test(str)){
			$('.one').css("display","none")
			sw=true;
		}else{
			$(".one").html('请输入正确的手机号码')
			sw=false;
		}
	})
}
fn1();

function fn2(){
	$("#tu").focus(function(){
		if(!($("#tu").val()=='')){
			$('.two').css("display","none")
		}
	})
	$("#tu").blur(function(){
		var re=$("#tuyzm").html()
		var str=$("#tu").val();
		if($("#tu").val()==''){
			$('.two').css("display","none")
//			$(".two").html('请输入图像验证码')
			sw=false;
		}else if(re==str){
			$('.two').css("display","none")
			sw=true;
		}else{
			$(".two").html('图像验证码输入不正确')
			sw=false;
		}
	})
}
fn2();

function fn3(){
	$("#num").focus(function(){
		if(!($("#num").val()=='')){
			$('.three').css("display","none")
		}
	})
	$("#num").blur(function(){
		var re=$("#tuyzm").html()
		var str=$("#num").val();
		if($("#num").val()==''){
			$('.three').css("display","none")
//			$(".three").html('请输入上面的图像验证码')
			sw=false;
		}else if(re==str){
			$('.three').css("display","none")
			sw=true;
		}else{
			$(".three").html('图像验证码输入不正确')
			sw=false;
		}
	})

}
fn3();


function fn4(){
	$("#pwd").focus(function(){
		if(!($("#pwd").val()=='')){
			$('.four').css("display","none")
		}
	})
	$("#pwd").blur(function(){
		var re=/^\w{8,16}$/
		var str=$("#pwd").val();
		if($("#pwd").val()==''){
			$('.four').css("display","none")
//			$(".four").html('请输入密码')
			sw=false;
		}else if(re.test(str)){
			$('.four').css("display","none")
			$(".four").html('输入正确')
			sw=true;
		}else{
			$(".four").html('请输入8-16位密码(包括数字字母下划线)')
			sw=false;
		}
	})

}
fn4();


function fn5(){
	$("#qpwd").focus(function(){
		if(!($("#qpwd").val()=='')){
			$('.five').css("display","none")
		}
	})
	$("#qpwd").blur(function(){
		var re=/^\w{8,16}$/
		var str=$("#qpwd").val();
		if($("#qpwd").val()==''){
			$('.five').css("display","none")
//			$(".five").html('请输入密码')
			sw=false;
		}else if(re.test(str)){
			if(str==$("#pwd").val()){
				$('.five').css("display","none")
				$(".five").html('输入正确')
				sw=true;
			}else{
				$(".five").html('两次输入密码不一致')
				sw=false;
			}
		}else{
			$(".five").html('请输入8-16位密码(包括数字字母下划线)')
			sw=false;
		}
	})

}
fn5();







var arr=[];
$('.ts7').click(function(){
	if(sw){
		location.href="enter.html"
		var date=new Date();
		date.setDate(date.getDate()+1);
		document.cookie="key" + '=' + 
		'{username:"'+ $('#phone').val() +'",password:"'+ $('#pwd').val() +'"}'
		+";expires="+date+";path=/";
		arr.push(document.cookie);
	}
	console.log(document.cookie)
})











