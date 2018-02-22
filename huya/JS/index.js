//每当浏览器大小调整时触发 ↓ 函数 调整huya_top_box的宽度
$(window).resize(function() { 
    bodyw = $(document.body).outerWidth(true); 
    if(bodyw<1480){
    $(document.body).addClass("w-1000"); 
}else{ 
    $(document.body).removeClass("w-1000");
}
});
$(document).ready(function() { 
    bodyw = $(document.body).outerWidth(true); 
    if(bodyw<1480){
    $(document.body).addClass("w-1000"); 
}else{ 
    $(document.body).removeClass("w-1000");
}
});
//每当浏览器大小调整时触发 ↑ 函数 调整huya_top_box的宽度
//控制lf_top_button_bf按钮的事件状态
var button_bf=0;
$('.lf_button_bf,.lf_top_bf').click(function(){
    button_bf++;
    if(button_bf>2){
        button_bf=1;
    }
   
    if(button_bf==1){
        $('.lf_button_bf').attr("title","暂停观看");
        $('.lf_button_bf').addClass('lf_button_bf1').removeClass('lf_button_bf2');
        $('.lf_top_bf').css('display','none');
        $('.lf_button_sx').css('display','block');
        $('.main_lf_top').addClass('main_lf_top_jr');
    }else if(button_bf==2){
        $('.lf_button_bf').attr("title","开始观看");
        $('.lf_button_bf').addClass('lf_button_bf2').removeClass('lf_button_bf1');
        $('.lf_top_bf').css('display','block');
        $('.lf_button_sx').css('display','none');
        $('.main_lf_top').removeClass('main_lf_top_jr');
    }
})
//控制lf_top_button_bf按钮的事件状态
//获取video 初始音量大小
var video = $('#video');
video[0].volume=0.5;
//获取video 初始音量大小
//控制音量大小
var _flag = false; 

//当鼠标按下时
$('.lf_button_rgbox_yl').on('mousedown', function(e) {
  _flag = true;
  var position = e.pageX - $('.yl_bg').offset().left;
  console.log(position);
  var percentage = 100 * position / $('.yl_bg').width();
  
  if(percentage<=2){
    percentage=0;
  }else if( percentage>=95){
    percentage=100;
  }
  var pleft = position-4;
  if(pleft>=80){
    pleft=80;
  }else if(pleft<=0){
    pleft=0;
  }
$('.yl_bar').css('width', pleft+'px');
$('.yl_btn').css('left',pleft +'px');
video[0].volume = percentage / 100;
//如果flag为true执行
  $(document).on('mousemove',function(e){
    if(_flag == true){
      var position = e.pageX - $('.yl_bg').offset().left;
      console.log(position);
      var percentage = 100 * position / $('.yl_bg').width();
      
      if(percentage<=2){
        percentage=0;
      }else if( percentage>=95){
        percentage=100;
      }
      var pleft = position-4;
      if(pleft>=80){
        pleft=80;
      }else if(pleft<=0){
        pleft=0;
        $('.lf_button_rgbox_ylbtn').addClass('lf_button_rgbox_ylbtn2').removeClass('lf_button_rgbox_ylbtn1');
      }else if(pleft>0){
        $('.lf_button_rgbox_ylbtn').addClass('lf_button_rgbox_ylbtn1').removeClass('lf_button_rgbox_ylbtn2');
      }
  $('.yl_bar').css('width', pleft+'px');
  $('.yl_btn').css('left',pleft +'px');
  video[0].volume = percentage / 100;
  console.log(percentage);
    };
});
//当鼠标释放时重置flag为false
$('.lf_button_rgbox_yl').on("mouseup",function(e){  
  _flag = false;   
}); 
$(document).on('mouseup',function(){
  _flag = false; 
});
});
//控制音量大小
//控制视频播放暂停按钮
$('.lf_button_bf,.lf_top_bf').click(function(){
    if (video[0].paused) 
    video[0].play(); 
    else 
    video[0].pause();  
  });
  //控制视频播放暂停按钮
  //计时器当鼠标移入main_lf_top_jr的时候lf_top_jr black 几秒后 lf_top_jr none
  var t;
  $('.lf_top_video').hover(function(){
    $('.lf_top_jr').css('display','block');
    t = setTimeout (function(){
        $('.lf_top_jr').css('display','none');
    },2000)


  },
  function () {
    clearTimeout(t);
    $('.lf_top_jr').css('display','none');
  })
//计时器当鼠标移入main_lf_top_jr的时候lf_top_jr black 几秒后 lf_top_jr none
//获取main_rg_li队列数 创建随机数 页面加载时随机选中队列中的任何一位
var x=Math.floor(Math.random() * 6),
    qusrcx = x + 1;
    qusrc = '../Video/'+ qusrcx + '.mp4';
    $("#video").prop("src",qusrc);
$('.main_rg_li').eq(x).addClass('pitch');
$('.main_rg_li').click(function(){
  $(this).find('.rg_li_img').addClass('pitch');
  var queue = $(this).attr('queue');
  qusrcx = queue;
  qusrc = '../Video/'+ qusrcx + '.mp4'
  $("#video").prop("src",qusrc);
  video[0].play();
  //清除被选中元素之外的其他元素的Pitch类
  $('.main_rg_li').not(this).find('.rg_li_img').removeClass('pitch');
  //清除被选中元素之外的其他元素的Pitch类
  $('.main_rg_li').eq(x).removeClass('pitch');
  //重置播放控件  
  button_bf = 1;
  $('.lf_button_bf').attr("title","暂停观看");
  $('.lf_button_bf').addClass('lf_button_bf1').removeClass('lf_button_bf2');
  $('.lf_top_bf').css('display','none');
  $('.lf_button_sx').css('display','block');
  $('.main_lf_top').addClass('main_lf_top_jr');
  //重置播放控件  
})
//$('.left_top_video').prepend('<video id="video" src="../Video/MUM-126~1.mp4"></video>');
$('.announcement_r_b_lbox').mouseenter(function(){
  $(this).find('.announcement_lbox_icon2').removeClass('announcement_lbox_icon2_1');
  $('.announcement_r_b_lbox').not(this).find('.announcement_lbox_icon2').addClass('announcement_lbox_icon2_1');
  $(this).find('.announcement_lbox_icon3').addClass('announcement_lbox_icon3_1');
  $('.announcement_r_b_lbox').not(this).find('.announcement_lbox_icon3').removeClass('announcement_lbox_icon3_1');
  $(this).find('.announcement_main_d').addClass('announcement_main_d_no');
  $('.announcement_r_b_lbox').not(this).find('.announcement_main_d').removeClass('announcement_main_d_no');
  $(this).find('.announcement_main_p').addClass('announcement_main_p_no');
  $('.announcement_r_b_lbox').not(this).find('.announcement_main_p').removeClass('announcement_main_p_no');
  $(this).find('.announcement_main_p1').addClass('announcement_main_p1_no');
  $('.announcement_r_b_lbox').not(this).find('.announcement_main_p1').removeClass('announcement_main_p1_no');
})