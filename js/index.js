

//-----------------------------------------------广告
$('.circle').click(function(){
	$('.advertising-wrap').remove();
})

//------------------------------------------------#top----------------------left
$('#top .left li a').hover(function(){
	$(this).css({
		"color" : "red"
	})
},function(){
	$(this).css({
		"color" : "#a4a4a4"
	})
	$('.menu li a').css({
		"color" : "#000"
	})
})


$('header #top .left .te4').hover(function(){
	$('.left i').css({
		"border-style" : "solid",
        "border-width" : "5px 5px 5px 5px",
        "border-color" : "#fff #fff #999999 #fff",
        "top" : "6px"
	})
	$("#top .left .te4").css({
		"border-left" : "1px solid #ededed",
		"border-right" : "1px solid #ededed",
        "border-bottom" : "1px solid #fff"
	})
	$('#top .left .te4 .te2').css({
		"border-right" : "0"
	})
	$('.te0').css({
		"border-right" : "0"
	})
	$('#top .left #QRcode').css({
		"display" : "block"
	})
},function(){
	$('.left i').css({
		"border-style" : "solid",
        "border-width" : "5px 5px 5px 5px",
        "border-color" : "#999999 #fff #fff #fff",
        "top" : "11px"
	})
	$("#top .left .te4").css({
		"border" : "0",
	})
	$('#top .left .te4 .te2').css({
		"border-right" : "1px solid #e4e4e4"
	})
	$('.te0').css({
		"border-right" : "1px solid #e4e4e4"
	})
	$('#top .left #QRcode').css({
		"display" : "none"
	})
})


$('header #top .left .te5').hover(function(){
	$('.left em').css({
		"border-style" : "solid",
        "border-width" : "5px 5px 5px 5px",
        "border-color" : "#fff #fff #999999 #fff",
        "top" : "6px",
	})
	$('.left i').css("right" , "4px")
	$("#top .left .te5").css({
		"border-left" : "1px solid #ededed",
		"border-right" : "1px solid #ededed",
        "border-bottom" : "1px solid #fff"
	})
	$("#top .left .te5 .te3").css({
		"border-right" : "0"
	})
	$('#top .left .te4 .te2').css({
		"border-right" : "0"
	})
	$('#top .left .menu').css({
		"display" : "block"
	})
},function(){
	$('.left em').css({
		"border-style" : "solid",
        "border-width" : "5px 5px 5px 5px",
        "border-color" : "#999999 #fff #fff #fff",
        "top" : "11px",
	})
	$('.left i').css("right" , "5px")
	$("#top .left .te5").css({
		"border" : "0",
	})
	$("#top .left .te5 .te3").css({
		"border-right" : "1px solid #e4e4e4"
	})
	$('#top .left .te4 .te2').css({
		"border-right" : "1px solid #e4e4e4"
	})
	$('#top .left .menu').css({
		"display" : "none"
	})
})
//------------------------------------------------#top----------------------right
$('#top .right li a').hover(function(){
	$(this).css({
		"color" : "red"
	})
},function(){
	$(this).css({
		"color" : "#a4a4a4"
	})
})


$('#top .right span').hover(function(){
	$('.te13').css({
		"color" : "red"
	})
},function(){
	$('.te13').css({
		"color" : "#a4a4a4"
	})
})

$('.right .te14').hover(function(){
	$(this).css({
		"border-top" : "1px solid #a4a4a4",
		"border-left" : "1px solid #a4a4a4",
		"border-right" : "1px solid #a4a4a4",
		"border-bottom" : "1px solid yellow"
	})
	$('.te14 .box').css({
		"display" : "block"
	})
	$('.te12').css({
		"border" : "0"
	})
},function(){
	$(this).css({
		"border" : "0",
	})
	$('.te14 .box').css({
		"display" : "none"
	})
	$('.te12').css({
		"border-right" : "1px solid #a4a4a4"
	})
})


$("#dyz").click(function(){
	let str=`
				<div id="shade"></div>
				<div id="enter">
					<h6>
						<span class="ts">X</span>
					</h6>
					<h2>
						<a href="" class="ts">账号登录</a>
						<a href="">扫码登录</a>
					</h2>
					<form action="" method="">
						<input type="text" name="" id="shoujihao" value="" placeholder="手机号/邮件地址"/>
						<input type="text" name="" id="pwd" value="" placeholder="密码"/>
						<a href="">短信验证码登录</a>
						<input type="submit" name="" id="sub" value="登录" />
						<input type="radio" name="name" id="" value="" />记住华为账号
					</form>
					<h3>
						<a href="login.html" class="ts">注册账号</a>
						<a href="">忘记密码？</a>
					</h3>
					<div id="btom"></div>
					<p class="one"></p>
				</div>
			`;
	$("body").append(str);
	alert($("body"))
})

$("#enter h6 .ts").click(function(){
	$("#enter h6 .ts").remove();
})

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
	$("#shoujihao").focus(function(){
		if(!($("#shoujihao").val()=='')){
			$('#enter .one').css("display","none")
			sw=false;
			use=false;
		}
	})
	$("#shoujihao").blur(function(){
		if($("#shoujihao").val()==list.username){
			$("#enter .one").css("display","none")
			sw=true;
			use=true;
		}else{
			$("#enter .one").css("display","block")
			$("#enter .one").html("请输入你的账号")
			sw=false;
			use=false;
		}
	})

}
fn1();


function fn2(){
	$("#pwd").focus(function(){
		if(!($("#pwd").val()=='')){
			$('#enter .one').css("display","none")
			sw=false;
			pass=false;
		}
	})
	$("#pwd").blur(function(){
		if(sw){
			if($("#pwd").val()==list.password){
				$("#enter .one").css("display","none")
				sw=true;
				pass=true;
			}else{
				$("#enter .one").css("display","block")
				$("#enter .one").html("请输入你的密码")
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


















//--------------------------------------------#bottom
$('#bottom input').focus(function(){
	$('#bottom #pox').css("display","none")
})
$('#bottom input').blur(function(){
	$('#bottom #pox').css("display","block")
})
//--------------------------------------------#banner
$('#banner ul .li1').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts1').css("color","#fff")
	$('#banner ul .li1 .ts2').css("color","#fff")
	$('#banner ul .li1 .ts3').css("color","#fff")
	$('#banner ul .li1 em').css("color","#fff")
	$('#banner .box1').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts1').css("color","#999999")
	$('#banner ul .li1 .ts2').css("color","#999999")
	$('#banner ul .li1 .ts3').css("color","#999999")
	$('#banner ul .li1 em').css("color","#999999")
	$('#banner .box1').css("display","none")
})


$('#banner ul .li2').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts4').css("color","#fff")
	$('#banner ul .li1 .ts5').css("color","#fff")
	$('#banner ul .li1 .ts6').css("color","#fff")
	$('#banner ul .li1 h6').css("color","#fff")
	$('#banner .box2').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts4').css("color","#999999")
	$('#banner ul .li1 .ts5').css("color","#999999")
	$('#banner ul .li1 .ts6').css("color","#999999")
	$('#banner ul .li1 h6').css("color","#999999")
	$('#banner .box2').css("display","none")
})


$('#banner ul .li3').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts7').css("color","#fff")
	$('#banner ul .li1 .ts8').css("color","#fff")
	$('#banner ul .li1 .ts9').css("color","#fff")
	$('#banner ul .li1 h5').css("color","#fff")
	$('#banner .box3').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts7').css("color","#999999")
	$('#banner ul .li1 .ts8').css("color","#999999")
	$('#banner ul .li1 .ts9').css("color","#999999")
	$('#banner ul .li1 h5').css("color","#999999")
	$('#banner .box3').css("display","none")
})


$('#banner ul .li4').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts10').css("color","#fff")
	$('#banner ul .li1 .ts11').css("color","#fff")
	$('#banner ul .li1 .ts12').css("color","#fff")
	$('#banner ul .li1 h4').css("color","#fff")
	$('#banner .box4').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts10').css("color","#999999")
	$('#banner ul .li1 .ts11').css("color","#999999")
	$('#banner ul .li1 .ts12').css("color","#999999")
	$('#banner ul .li1 h4').css("color","#999999")
	$('#banner .box4').css("display","none")
})


$('#banner ul .li5').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts13').css("color","#fff")
	$('#banner ul .li1 .ts14').css("color","#fff")
	$('#banner ul .li1 .ts15').css("color","#fff")
	$('#banner ul .li1 h3').css("color","#fff")
	$('#banner .box5').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts13').css("color","#999999")
	$('#banner ul .li1 .ts14').css("color","#999999")
	$('#banner ul .li1 .ts15').css("color","#999999")
	$('#banner ul .li1 h3').css("color","#999999")
	$('#banner .box5').css("display","none")
})


$('#banner ul .li6').hover(function(){
	$(this).css("background","rgba(61,61,61,1)")
	$('#banner ul .li1 .ts16').css("color","#fff")
	$('#banner ul .li1 .ts17').css("color","#fff")
	$('#banner ul .li1 .ts18').css("color","#fff")
	$('#banner ul .li1 .h3').css("color","#fff")
	$('#banner .box6').css("display","block")
},function(){
	$(this).css("background","rgba(70,81,88,.8)")
	$('#banner ul .li1 .ts16').css("color","#999999")
	$('#banner ul .li1 .ts17').css("color","#999999")
	$('#banner ul .li1 .ts18').css("color","#999999")
	$('#banner ul .li1 .h3').css("color","#999999")
	$('#banner .box6').css("display","none")
})

//-----------------------------------.banner-wrap轮播
//用ajax请求banner的背景图
$.ajax({
	type:"get",
	url:"banner.json",
	async:true,
	success:function(arr){
		return arr;
	}
});
var indexA=0;
var timer=null;
function fn(){
	$('.banner-wrap').css("transition","all 1s")
	$('.banner-wrap').css("background-image","url(http://127.0.0.1/huaweishop/img/banner"+ (indexA++ %8+1) +".jpg)")
}
function fu(){
	timer=setInterval(function(){
		fn();
	},5000)
}
fu();
fn();
$('#cli span').mouseenter(function(){
	indexA=$(this).index();
	console.log(indexA)
	$(this).css("background","#fff");
	fn();
	clearInterval(timer);
})
$('#cli span').mouseleave(function(){
	$(this).css("background","0");
	fu();
})









//-----------------------------------------------------------#column
$.ajax({
	type:"get",
	url:"notice.json",
	async:true,
	success:function(arr){
//		return arr;
//		console.log(arr.length)
//		$('#column #gt #notice .p').html(arr[0].vle);
		for(var i=0,len=arr.length;i<len;i++){
			var h3=document.createElement('h3');
			$('#column #gt #notice .notice').append(h3);
			$('#column #gt #notice .notice h3').css({
				"width" : "245px",
                "height" : "16px",
                "line-height" : "16px",
                "font-size" : "13px",
                "border" : "1px solid yellow",
                "cursor" : "pointer",
                "white-space" : "nowrap",
                "overflow" : "hidden",
                "text-overflow" : "ellipsis",
                "position" : "absolute",
                "top" : "16px"
			})
		}
		                    
	}
});
//var Noticetimer=null;
//var Nnum=1;
////1.克隆元素	
//function Notice(){
//	var Disp=Nnum++;
//	var Displace=-34*Disp;
////	alert(-34*Disp)
//	$('#column #gt #notice .notice h3').css("transition","all 1s")
//	if(Displace== -170){
//		$('#column #gt #notice .notice h3').css("transform","translateY(0px)")
//	}else{
////		$('#column #gt #notice .notice h3').css("transform","translateY("+ Displace +"px)")
//	}
//}
////Notice();
//function Noticeauto(){
//	Noticetimer=setInterval(function(){
////		Notice();
//	},2000)
//}
//Noticeauto();

//获取大盒子
//	let scroll = document.getElementById("scroll");
	//获取notice
//	let notice = $('#column #gt #notice .notice');
//	//获取notice中的h3
//	let h3 = $('#column #gt #notice .notice').find("h3");
//	//获取每个h3的高度
//	let h3Height = 16;
//	console.log(h3)
//	//1.克隆元素
//	notice.append(h3.clone(true));
//	
//	
//	function animate(obj,target){
//		clearInterval(obj.Noticetimer);
//		let speed = obj.offsetTop < target ? 15 : -15;
//		obj.Noticetimer = setInterval(()=>{
//			obj.css("top","obj.offsetTop + speed + 'px'");
//			if(Math.abs(target - obj.offsetTop) <= Math.abs(speed)){
//				clearInterval(obj.Noticetimer);
//				obj.style.top = target + 'px';
//			}
//		},30);
//	}
//	
//var Noticetimer=null;
//var key = 0; //控制播放的数量
//var circle = 0;
//var olLis = document.querySelectorAll('#ol li');
//Noticetimer = setInterval(autoPlay,3000);
//function autoPlay(){
//	key ++;
//	if(key > notice.length - 1){
//		notice.css("top","0")
//		key = 1;
//	}
//	animate(h3,-key * h3Height);
//}

//-----------------------------------------------------------#pic
$.ajax({
	type:"get",
	url:"pic.json",
	async:true,
	success:function(arr){
		for(let i=0,len=arr.length;i<len;i++){
			let str=`
				<img src="${arr[i].src}"/>
			`;
			$("#pic").append(str);
		}
	}
});















//function conClick(){
//var  $bigBox = $(".competitive");
// var $btnLeft = $(".competitive-wrap-but1");
//  var $btnRight = $(".competitive-wrap-but2");
//  var left = 0;
//      $btnRight.click(function(){    
//              left += -1200;
//              if(left <=-5000){
//                  left = -5960;
//              }
//          $bigBox.animate({"left":left},400);
//          
//      });
//      $btnLeft.click(function(){    
//          left += 1200;
//          if(left >=0){
//              left = 0;
//          }
//      $bigBox.animate({"left":left},400);
//      
//  });
//}
//conClick();









