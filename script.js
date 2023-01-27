$(function(){
    let luckyCan=$(".can");
    let luckyStick=$(".stick");
    let bgmSource=new Audio("./asia.mp3");
    let bgm=$(".bgm");
   $(".start-button").on("click",function(){
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyStick.delay(1000).animate({top:"0%",opacity:"1"},500).animate({top:"-5%"},500).animate({top:"-8%",left:"40%"},800).animate({top:"-5%",left:"25%"},800).css("top","0%").css("opacity","0").css("left","65%").delay(5000).animate({opacity:"0"});
   })
    bgm.on("click",function(){
        if(bgmSource.paused){
            bgmSource.volume=0.6;
            bgmSource.play();
        }else{
            bgmSource.pause();
        }
       
    })
  
  });