//对错弹框
function duicuo(a,b,c){
	if(a == 1){
		//回答正确
		$('body').append(`
			<div id="duicuo">
				<span>×</span>
				<img src="img/dui.png"/>
				<p>回答正确</p>
				<div class="duicuo_inner">
					`+b+`
				</div>
				<div class="solution">
					正确答案：`+c+`
				</div>
				<div class="got_it">知道了</div>
			</div>
		`)
	}else{
		//回答错误
		$("body").append(`<div id="duicuo">
				<span>×</span>
				<img src="img/cuo.png"/>
				<p>回答正确</p>
				<div class="duicuo_inner">
					`+b+`
				</div>
				<div class="solution">
					正确答案：`+c+`
				</div>
				<div class="got_it">知道了</div>
			</div>`);
	}
}

//错误弹框
function error_pop(a,b){
	$('body').append(`
		<div id='error_pop' class="clear" style='animation: upin .5s ease;-webkit-animation: upin .5s ease;'>
    		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20.25 21H3.75C3.4875 21 3.2625 20.85 3.1125 20.6625C2.9625 20.4375 2.9625 20.175 3.075 19.95L11.325 3.45C11.4375 3.15 11.7 3 12 3C12.3 3 12.5625 3.15 12.675 3.4125L20.925 19.9125C21.0375 20.1375 21.0375 20.4375 20.8875 20.625C20.7375 20.85 20.5125 21 20.25 21ZM4.95 19.5H19.0125L12 5.4375L4.95 19.5Z" fill="#DE2121"/>
				<path d="M12 15.75C11.5875 15.75 11.25 15.4125 11.25 15V10.5C11.25 10.0875 11.5875 9.75 12 9.75C12.4125 9.75 12.75 10.0875 12.75 10.5V15C12.75 15.4125 12.4125 15.75 12 15.75Z" fill="#DE2121"/>
				<path d="M12 18.75C12.6213 18.75 13.125 18.2463 13.125 17.625C13.125 17.0037 12.6213 16.5 12 16.5C11.3787 16.5 10.875 17.0037 10.875 17.625C10.875 18.2463 11.3787 18.75 12 18.75Z" fill="#DE2121"/>
			</svg>
			<div class="error_pop_tit">
				`+a+`
			</div>
    	</div>
	`)
	setTimeout(function(){
		$('#error_pop').remove();
	},b)
	
}
//error_pop();

//正确弹框
function success_pop(a,b){
	$('body').append(`
		<div id='success_pop' class="clear" style='animation: upin .5s ease;-webkit-animation: upin .5s ease;'>
    		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z" stroke="#39B54A" stroke-width="1.5"/>
				<path d="M10.5 16.1999C10.3125 16.1999 10.125 16.1249 9.975 15.9749L6.225 12.225C5.925 11.925 5.925 11.475 6.225 11.175C6.525 10.875 6.975 10.875 7.275 11.175L10.5 14.4L16.725 8.17495C17.025 7.87495 17.475 7.87495 17.775 8.17495C18.075 8.47495 18.075 8.92495 17.775 9.22495L11.025 15.9749C10.875 16.1624 10.6875 16.1999 10.5 16.1999Z" fill="#39B54A"/>
			</svg>
			<div class="error_pop_tit">
				`+a+`
			</div>
    	</div>
	`)
	setTimeout(function(){
		$('#success_pop').remove();
	},b)
	
}


