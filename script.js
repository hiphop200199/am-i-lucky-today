$(function(){
    const fortunePoems=[{
        title:"大吉",
        content:"春暖花開，洋洋得意，步步高升，滿面春風"
    },{
        title:"中吉",
        content:"歡天喜地，眾望所歸，平心靜氣，能屈能伸"
    },{
        title:"小吉",
        content:"心花怒放，忍辱負重，任重道遠，揚眉吐氣"
    },{
        title:"平平",
        content:"冷暖自知，平淡無奇，人生海海，樂在其中"
    },{
        title:"小小吉",
        content:"生花妙筆，榜上有名，丟金落銀，自在寬心"
    },{
        title:"極吉",
        content:"風調雨順，升官發財，黃金屋也，顏如玉也"
    },{
        title:"平",
        content:"若無其事，平淡無奇，無所事事，休息片刻"
    },{
        title:"平平平",
        content:"從容不迫，臨危不亂，平步青雲，心平氣和"
    },{
        title:"微凶",
        content:"無妄之災，無可奈何，手足無措，驚慌失措"
    },{
        title:"小凶",
        content:"如坐針氈，洋洋得意，心慌意亂，忐忑不安"
    },{
        title:"中凶",
        content:"風吹草動，一場春夢，一波三折，芒刺在背"
    },{
        title:"大凶",
        content:"冰天雪地，名落孫山，土崩瓦解，雷電交加"
    },{
        title:"極凶",
        content:"天崩地裂，惡鬼呼號，破財傷身，請勿出門"
    }];
    let luckyCan=$(".can");
    let luckyStick=$(".stick");
    let bgmSource=new Audio("./asia.mp3");
    let bgm=$(".bgm");
    let textTitle=$(".text-title");
    let textContent=$(".text-content");
   $(".start-button").on("click",function(){
    textTitle.text("");
    luckyStick.css({"top":"0%","opacity":"0","left":"65%"});
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyCan.animate({top:"-5%"},100);
    luckyCan.animate({top:"0%"},100);
    luckyStick.delay(400).animate({top:"0%",opacity:"1"},200).animate({top:"-5%"},200).animate({top:"-8%",left:"40%"},400).animate({top:"-5%",left:"25%"},400);
    textTitle.text(fortunePoems[Math.floor(Math.random()*(fortunePoems.length))]["title"]);
    textContent.text(fortunePoems[Math.floor(Math.random()*(fortunePoems.length))]["content"]);
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