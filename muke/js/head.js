
//$(document).on('click',function(e){
//  var e = e || window.event; //浏览器兼容性
//  var elem = e.target || e.srcElement;
////  if($(".detection_yes_tankaung")[0].style.display != 'block'){
//		 while (elem) { //循环判断至跟节点，防止点击的是div子元素
//	        if (elem.class && elem.class=='detection_yes_img') {
//	            return;
//	        }//如果还有别的div不想点击，就加else if判断
//	        elem = elem.parentNode;
//	   		 console.log($(".detection_yes_tankaung")[0].style.display)
////	        $(".detection_yes_tankaung").css('display','block');
//	    }
//	    //这里写你想实现的效果
//		console.log(2)
//	    $(".detection_yes_tankaung").css('display','none');
////	}
////  console.log($(".detection_yes_tankaung")[0].style.display)
//});

$('.detection_yes_img').click(function(){
	$(".shopping_trolley_son").css('display','none');
	if($(".detection_yes_tankaung")[0].style.display == 'block'){
		$(".detection_yes_tankaung").css('display','none');
		$(".touxiangtangkuang_motaiceng").css('display','none');
		
	}else{
		$(".detection_yes_tankaung").css('display','block');
		$(".touxiangtangkuang_motaiceng").css('display','block');
		
	}
})
$('.touxiangtangkuang_motaiceng').click(function(){
	$(".detection_yes_tankaung").css('display','none');
	$(".touxiangtangkuang_motaiceng").css('display','none');
})
$(".shopping_trolley").click(function(){
	$(".detection_yes_tankaung").css('display','none');
	if($(".shopping_trolley_son")[0].style.display == 'block'){
		$(".shopping_trolley_son").css('display','none');
		
	}else{
		$(".shopping_trolley_son").css('display','block');
	}
})
$("#head .head_le img").click(function(){
//	location.replace('home.html');
	window.location.href='home.html';
})
$(".zhucetiaozhuan").click(function(){
//	location.replace('login.html?'+1);
	window.location.href='login.html?'+1;
})
$(".detection_yes_liebiao li").click(function(){
	if($(this)[0].dataset.id==1){
//		location.replace('my_favorite.html');
		window.location.href='my_favorite.html';
	}else if($(this)[0].dataset.id==2){
//		location.replace('study_history.html');
		window.location.href='study_history.html';
	}else if($(this)[0].dataset.id==3){
//		location.replace('Boutique.html');
	}else if($(this)[0].dataset.id==4){
		window.location.href='my_integral.html';
//		location.replace('my_integral.html');
	}
})
$.ajax({
 	type:'POST',
 	url:"https://api.htlocalservice.com/muke/public/api/Users/checkInfo",
 	dataType:"json",
 	async:true,
 	traditional:true,
 	data:{
 		token:localStorage.lastname,//登录令牌
 	},
 	success:function(res){
 		if(res.code==-1){
			$('.detection_yes').css('display','none')
			$('.detection_no').css('display','block')
 		}
 	},
 	complete:function(res){
 		
 	},
 	error:function(res){

 	}
 })
function touxiang(){
	$.ajax({
	 	type:'POST',
	 	url:"https://api.htlocalservice.com/muke/public/api/My/head_img",
	 	dataType:"json",
	 	async:true,
	 	traditional:true,
	 	data:{
	 		token:localStorage.lastname,//登录令牌
	 	},
	 	success:function(res){
	 		if(res.code==200){
				$('.detection_yes').css('display','block')
				$('.detection_no').css('display','none')
				$('.detection_yes_img').attr("src",res.avatar)
	 		}else if(res.code==-1){
				$('.detection_yes').css('display','none')
				$('.detection_no').css('display','block')
	 		}
	 	},
	 	complete:function(res){
	 		
	 	},
	 	error:function(res){

	 	}
	 })
}
touxiang();
//	个人学习信息
function mylearninfo(){
	$.ajax({
	 	type:'POST',
	 	url:"https://api.htlocalservice.com/muke/public/api/My/mylearninfo",
	 	dataType:"json",
	 	async:true,
	 	traditional:true,
	 	data:{
 			token:localStorage.lastname,//登录令牌
	 	},
	 	success:function(res){
	 		if(res.code==200){
	 			$(".detection_yes_jifen span").html(res.data.integral)
	 			$(".detection_yes_tankaung_top_le").attr('src',res.data.avatar)
	 			$(".head_xinxi p").html(res.data.nickname)
	 			$(".head_xinxi div").html(res.data.level_name)
	 		}else if(res.code==-1){
				$('.detection_yes').css('display','none')
				$('.detection_no').css('display','block')
	 		}
	 	},
	 	complete:function(res){
	 		
	 	},
	 	error:function(res){

	 	}
	 })
 }
 mylearninfo();
 
//logo
function system(){
	$.ajax({
	 	type:'POST',
	 	url:"https://api.htlocalservice.com/muke/public/api/Index/system",
	 	dataType:"json",
	 	async:true,
	 	traditional:true,
	 	data:{
 			token:localStorage.lastname,//登录令牌
	 	},
	 	success:function(res){
	 		if(res.code==200){
	 			$(".head_le img").attr('src',res.data.logo)
	 			$("head").append(`
	 				<meta name="keywords" content="`+res.data.key+`">
					<meta name="description" content="`+res.data.des+`">	
	 			`)
	 			$('#head_input').attr('placeholder',res.data.search);
	 			$("#search").attr('placeholder',res.data.search);
	 		}
	 	},
	 	complete:function(res){
	 		
	 	},
	 	error:function(res){

	 	}
	 })
 }
 system();
 

$(".head_sousuo").click(function(){
	localStorage.sousuo=$("#head_input").val();
//	location.replace('Boutique.html');
	window.location.href='Boutique.html';
})
$("#head_input").keyup(function(event){
	if(event.keyCode == 13){
		localStorage.sousuo=$("#head_input").val();
//			location.replace('Boutique.html');
		window.location.href='Boutique.html';
	}
});


$('.detection_yes_quit').click(function(){
	$('.tuichu_tankuang').css('display','block')
})
$('.tuichu_tankuang_sp').click(function(){
	$('.tuichu_tankuang').css('display','none')
})
$('.tuichu_tankuang_no').click(function(){
	$('.tuichu_tankuang').css('display','none')
})
$('.tuichu_tankuang_yes').click(function(){
	$.ajax({
	 	type:'POST',
	 	url:"https://api.htlocalservice.com/muke/public/api/Users/logOut",
	 	dataType:"json",
	 	async:true,
	 	traditional:true,
	 	data:{
 			token:localStorage.lastname,//登录令牌
	 	},
	 	success:function(res){
	 		if(res.code==200){
	 			window.location.href='home.html';
	 		}
	 	},
	 	complete:function(res){
	 		
	 	},
	 	error:function(res){

	 	}
	 })
})
