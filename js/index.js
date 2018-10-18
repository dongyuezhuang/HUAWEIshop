$("dl").hover(function(){
	$(this).css({
		"transform": "translateY(-4px)",
		"transition": "all 0.5s",
		"box-shadow":"0px 15px 30px rgba(0,0,0,.2)"
	})
},function(){
	$(this).css({
		"transform": "translateY(0px)",
		"box-shadow":""
	})
})
$(window).scroll(function(){
//	console.log($("html,body").scrollTop())
	if($("html,body").scrollTop()>=1900){
		$("#scrolltop").css("display","block")
	}else{
		$("#scrolltop").css("display","none")
	}
})
$("#scrolltop").click(function(){
	$("html,body").animate({
		"scrollTop":"0"
	},500)
})
$(".hover1").hover(function(){
	$(".hover1 span").css("display","block")
	$(".hover2").css("display","block")
	$(".hover3").css("display","block")
},function(){
	$(".hover1 span").css("display","none")
	$(".hover2").css("display","none")
	$(".hover3").css("display","none")
})
$('.hover2').hover(function(){
	$(".hover1 span").css("display","block")
	$(".hover2").css("display","block")
	$(".hover3").css("display","block")
},function(){
	$(".hover1 span").css("display","none")
	$(".hover2").css("display","none")
	$(".hover3").css("display","none")
})
$('.hover3').hover(function(){
	$(".hover1 span").css("display","block")
	$(".hover2").css("display","block")
	$(".hover3").css("display","block")
},function(){
	$(".hover1 span").css("display","none")
	$(".hover2").css("display","none")
	$(".hover3").css("display","none")
})






//-----------------------------------------------广告
$('.circle').click(function(){
	$('.advertising-wrap').remove();
})

//------------------------------------------------#top


$("header #top .left .li1").hover(function(){
	$("header #top .left #QRcode").css("display","block")
	$("header #top .left li .ts4").css("border-right","0")
	$("header #top .left li .ts2").css("border-right","0")
	$("header #top .left .li1").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
	$("header #top .left .li1 i").css({
		"border-top" : "6px solid #fff",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #999",
    	"border-left": "6px solid #fff",
    	"top": "6px",
    	"right":"5px"
	})
},function(){
	$("header #top .left #QRcode").css("display","none")
	$("header #top .left li .ts4").css("border-right","1px solid #e4e4e4")
	$("header #top .left li .ts2").css("border-right","1px solid #e4e4e4")
	$("header #top .left .li1").css({
		"border-left" : "0",
		"border-right" : "0",
		"background" : ""
	})
	$("header #top .left .li1 i").css({
		"border-top" : "6px solid #999",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #fff",
    	"border-left": "6px solid #fff",
    	"top": "12px",
    	"right":"5px"
	})
})

$("header #top .left #QRcode").hover(function(){
	$("header #top .left #QRcode").css("display","block")
	$("header #top .left li .ts4").css("border-right","0")
	$("header #top .left li .ts2").css("border-right","0")
	$("header #top .left .li1").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
	$("header #top .left .li1 i").css({
		"border-top" : "6px solid #fff",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #999",
    	"border-left": "6px solid #fff",
    	"top": "6px",
    	"right":"5px"
	})
},function(){
	$("header #top .left #QRcode").css("display","none")
	$("header #top .left li .ts4").css("border-right","1px solid #e4e4e4")
	$("header #top .left li .ts2").css("border-right","1px solid #e4e4e4")
	$("header #top .left .li1").css({
		"border-left" : "0",
		"border-right" : "0",
		"background" : ""
	})
	$("header #top .left .li1 i").css({
		"border-top" : "6px solid #999",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #fff",
    	"border-left": "6px solid #fff",
    	"top": "12px",
    	"right":"5px"
	})
})



$("header #top .left .li2").hover(function(){
	$("header #top .left .menu").css("display","block")
	$("header #top .left li .ts2").css("border-right","0")
	$("header #top .left .li2").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
	$("header #top .left .li1 em").css({
		"border-top" : "6px solid #fff",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #999",
    	"border-left": "6px solid #fff",
    	"top": "6px",
    	"right":"5px"
	})
},function(){
	$("header #top .left .menu").css("display","none")
	$("header #top .left li .ts2").css("border-right","1px solid #e4e4e4;")
	$("header #top .left .li2").css({
		"border-left" : "",
		"border-right" : "",
		"background" : ""
	})
	$("header #top .left .li1 em").css({
		"border-top" : "6px solid #999",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #fff",
    	"border-left": "6px solid #fff",
    	"top": "12px",
    	"right":"5px"
	})
})




$("header #top .left .menu").hover(function(){
	$("header #top .left .menu").css("display","block")
	$("header #top .left li .ts2").css("border-right","0")
	$("header #top .left .li2").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
	$("header #top .left .li1 em").css({
		"border-top" : "6px solid #fff",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #999",
    	"border-left": "6px solid #fff",
    	"top": "6px",
    	"right":"5px"
	})
},function(){
	$("header #top .left .menu").css("display","none")
	$("header #top .left li .ts2").css("border-right","1px solid #e4e4e4;")
	$("header #top .left .li2").css({
		"border-left" : "",
		"border-right" : "",
		"background" : ""
	})
	$("header #top .left .li1 em").css({
		"border-top" : "6px solid #999",
     	"border-right" : "6px solid #fff",
    	"border-bottom" : "6px solid #fff",
    	"border-left": "6px solid #fff",
    	"top": "12px",
    	"right":"5px"
	})
})


$("header #top .right .ts1").hover(function(){
	$("header #top .right .ts2").css("display","block")
	$("header #top .right li .ts4").css("border-right","0")
	$("header #top .right .ts1").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
},function(){
	$("header #top .right .ts2").css("display","none")
	$("header #top .right li .ts4").css("border-right","1px solid #e4e4e4")
	$("header #top .right .ts1").css({
		"border-left" : "",
		"border-right" : "",
		"background" : ""
	})
})




$("header #top .left .menu").hover(function(){
	$("header #top .right .ts2").css("display","block")
	$("header #top .right li .ts4").css("border-right","0")
	$("header #top .right .ts1").css({
		"border-left" : "1px solid #e4e4e4",
		"border-right" : "1px solid #e4e4e4",
		"background" : "#fff"
	})
},function(){
	$("header #top .right .ts2").css("display","none")
	$("header #top .right li .ts4").css("border-right","1px solid #e4e4e4")
	$("header #top .right .ts1").css({
		"border-left" : "",
		"border-right" : "",
		"background" : ""
	})
})


//-----------------------------------------点击请登录出现遮罩层---------------------cookie-----------
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
				$("#enter .one").html("请正确输入你的密码")
				sw=false;
				pass=false;
			}
		}
	})
}

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
						<input type="text" name="" id="shoujihao" value="" placeholder="手机号/邮件地址" maxlength="11"/>
						<input type="password" name="" id="pwd" value="" placeholder="密码"/>
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
	fn1()
	fn2()
	$("#enter form").submit(function(){
		alert(use&&pass)
		if(use&&pass){
			location.href="index.html"
			return true;
		}else{
			return false;
		}
	})
	$("#enter h6 .ts").click(function(){
		$("#shade").remove();
		$("#enter").remove();
	})
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
//	console.log($('.banner-wrap').css("background-image"))
	$('.banner-wrap').css("background-image","url(http://10.9.168.110/huaweishop/img/banner"+ (indexA++ %8+1) +".jpg)")
}
function fu(){
	timer=setInterval(function(){
		fn();
	},5000)
}
fn();
fu();
$('#cli span').mouseenter(function(){
	indexA=$(this).index();
//	console.log(indexA)
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
//		console.log(arr)
//		$('#column #gt #notice .p').html(arr[0].vle);
		for(let i=0,len=arr.length;i<len;i++){
			let str =`
				<h3>${arr[i].vle}</h3>
			`;
			$("#notice .notice").append(str);
		} 
		var $h3=$("<h3 class=ts>我是皮</h3>")
		$('#notice .notice').append($h3)
//		$('#notice .notice h3').mouseenter(function(){
//			$("#notice .notice h3").css("color","red");
//			columnAuto();
//			clearInterval(colTimer);
//		})
//		$('#notice .notice h3').mouseleave(function(){
//			$("#notice .notice h3").css("color","#000");
//			setInterval(colTimer);
//			columnAuto()
//		})
	}
});
var indexB=0;
var colTimer=null;
function column(){
	if(indexB<6){
		console.log(indexB)
		$("#notice .notice h3").animate({"top":-(indexB*34)},1000);
		indexB++;
	}else{
		indexB=0;
		$("#notice .notice .ts").css("top","238px");
	}
}
function columnAuto(){
	colTimer=setInterval(function(){
		column();
	},500)
}
column();
columnAuto();


//-----------------------------------------------------------#pic
$.ajax({
	type:"get",
	url:"pic.json",
	async:true,
	success:function(arr){
//		console.log(arr)
		for(let i=0,len=arr.length;i<len;i++){
			let str=`
				<img src="${arr[i].src}"/>
			`;
			$("#pic").append(str);
		}
	}
});







//-------------------------------------------------------------------#recommend
$.ajax({
	type:"get",
	url:"recomment.json",
	async:true,
	success:function(arr){
//		console.log(arr)
		for(let i=0,len=arr.length;i<len;i++){
			let str=`
				<li>
					<img src="${arr[i].src}"/>
					<dd></dd>
					<p></p>
					<span></span>
				</li>
			`;
			$(".recommend ul").append(str);
			$(".recommend ul li dd").html(arr[i].model);
			$(".recommend ul li p").html(arr[i].refe);
			$(".recommend ul li span").html(arr[i].price);
		}
	}
});




function publicClick(){
var  $ul = $(".recommend .bott ul");
   var $left = $(".leftbutton");
    var $right = $(".rightbutton");
    var left = 0;
        $right.click(function(){    
                left += -1200;
                if(left <=-5300){
                    left = -5300;
                }
            $ul.animate({"left":left},400); 
        });
        $left.click(function(){    
            left += 1200;
            if(left >=0){
                left = 0;
            }
        $ul.animate({"left":left},400);
    });
}
publicClick();









