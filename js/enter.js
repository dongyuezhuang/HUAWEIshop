

//key={username:"13434343434",password:"34343434"}
var sw=true;
var use=false;
var pass=false;
var arr=document.cookie.split('=')
//Array [ "key", "{username:\"13434343434\",password:\"34343434\"}" ]
//console.log(arr[1])
//{username:"13434343434",password:"34343434"}
var list=eval('('+arr[1]+')')
console.log(list)
//Object { username: "13434343434", password: "34343434" }
//console.log(list.password)

function fn1(){
	$("#phone").focus(function(){
		if(!($("#phone").val()=='')){
			$('.one').css("display","none")
			sw=false;
			use=false;
		}
	})
	$("#phone").blur(function(){
		if($("#phone").val()==list.username){
			$(".one").css("display","none")
			sw=true;
			use=true;
		}else{
			$(".one").css("display","block")
			$(".one").html("请输入你的账号")
			sw=false;
			use=false;
		}
	})

}
fn1();


function fn2(){
	$("#pwd").focus(function(){
		if(!($("#pwd").val()=='')){
			$('.one').css("display","none")
			sw=false;
			pass=false;
		}
	})
	$("#pwd").blur(function(){
		if(sw){
			if($("#pwd").val()==list.password){
				$(".one").css("display","none")
				sw=true;
				pass=true;
			}else{
				$(".one").css("display","block")
				$(".one").html("请输入你的密码")
				sw=false;
				pass=false;
			}
		}
	})
}
fn2();

$("form").submit(function(){
	alert(use&&pass)
	if(use&&pass){
		location.href="index.html"
		return true;
	}else{
		return false;
	}
})















