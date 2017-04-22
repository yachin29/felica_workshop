// JavaScript Document

$(function() {
  
$('#hum').on('click',function(){
if($(window).innerWidth() <= 1019){
  $('#bar').not(':animated').toggleClass('click');
  $('#sp-nav ul').not(':animated').slideToggle(200);
  };
});
$(window).resize(function(){
  $('#sp-nav ul').hide();//スマホの時
if($(window).innerWidth() > 1019){ 
 $('#sp-nav ul').show();//タブレット以上の時
 $('#hum').removeClass('click');//PCから戻る時に邪魔な.clickを削除するため
 } 
});



//スムーススクロール
$(function(){
	var topBtn = $('#bottom');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});








//温泉ページのアコーディオンメニュー
$(window).on('load resize',function(){
  if($(window).innerWidth() <= 640){
$('ul.outer').css('display','none');
$('#onsenAll h2').on('touchstart',function(){
      if($(this).siblings('ul').css('display')=='none'){
      $('ul.outer').slideUp(200);
      $(this).siblings('ul.outer').slideDown(200);
      }else{
       $(this).siblings('ul.outer').slideUp(200);
      }
      
  });
 }else {
 $('ul.outer').css('display','block');
 };

});


$('li.more').on('click',function(){
  if($(window).innerWidth() <= 640){
      $(this).siblings('li:nth-child(n+4)').slideToggle(0);
  };
  
  if(flg == "close"){
            $(this).text('4位から10位を隠す');
            flg = "open";
        }else{
            $(this).text('4位から10位を表示する');
            flg = "close"
            };
  });

$('li.show').on('click',function(){
  if($(window).innerWidth() <= 640){
      $(this).siblings('li:nth-child(n+2)').slideToggle(0);
  };
  
  if(flg == "close"){
            $(this).text('閉じる');
            flg = "open";
        }else{
            $(this).text('もっと見る');
            flg = "close"
            };
  });


//高校生ページのアコーディオン
$('p.more').on('click',function(){
  if($(window).innerWidth() <= 640){
       if($(this).prev('ul').children('li:nth-child(n+4)').css('display')=='none'){
      $('ul.list li:nth-child(n+4)').slideUp(0);
      $(this).prev('ul').children('li:nth-child(n+4)').slideDown(0);
      }else{
      $(this).prev('ul').children('li:nth-child(n+4)').slideUp(0);
      }
  };


  if(flg == "close"){
            $(this).text('閉じる');
            flg = "open";
        }else{
            $(this).text('もっと見る');
            flg = "close"
            };
  });
  var flg = "close";


  




});