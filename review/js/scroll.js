//boxname父级元素classname  speed滚动速度 interval滚动时间
function Scroll(boxname,speed,interval){
//boxname父级元素classname  speed滚动速度 interval滚动时间   
//children返回被选元素的所有直接子元素
var box =  $('.' + boxname),
    boximg = box.children(".scroll-box-img"),
    img =  boximg.children("img"),
    btnbox = box.children('.button-box'),
    btn = btnbox.children('span'),
    btnrg = box.children('.scroll-box-btnrg'),
    btnlf = box.children('.scroll-box-btnlf'),
    width = img.width(),
    i = 0,
    l = btn.length,
    Tim;
//轮播
function scroll(){
    boximg.animate({left:-width},speed,function(){
    //??:first 子元素的第一个元素 appendTo 像所选元素末尾添加
    boximg.children("img:first").appendTo(boximg)
    //??:first 子元素的第一个元素 appendTo 像所选元素末尾添加
    boximg.css({left:0})
    })
    i += 1;
    if(i >= l){
        i = 0;
    }
    btnbox.children('span').eq(i).addClass('buttons1').siblings('.buttons1').removeClass('buttons1');
    }
    var t;
        t = setInterval(scroll,interval)
        box.hover(function(){
            clearInterval(t);
        },function(){
            t = setInterval(scroll,interval)
        })
//轮播
//按钮控制想左滚动
btnrg.click(function(){
    boximg.animate({left:-width},speed,function(){
    //??:first 子元素的第一个元素 appendTo 像所选元素末尾添加
    boximg.children("img:first").appendTo($(".scroll-box .scroll-box-img"))
    //??:first 子元素的第一个元素 appendTo 像所选元素末尾添加
    boximg.css({left:0})
    })
    i += 1;
    if(i >= l){
        i = 0;
    }
    btnbox.children('span').eq(i).addClass('buttons1').siblings('.buttons1').removeClass('buttons1');
})
//按钮控制想左滚动
//按钮控制想右滚动
btnlf.click(function(){
    boximg.animate({left:width},speed,function(){
    //??:last 子元素的最后一个元素 appendTo 像所选元素末尾添加
    boximg.children("img:last").prependTo($(".scroll-box .scroll-box-img"));
    //??:last 子元素的最后一个元素 appendTo 像所选元素末尾添加
    boximg.css({left:0})
    })
    i -= 1;
    if(i < 0){
        i = l-1;
    }
    btnbox.children('span').eq(i).addClass('buttons1').siblings('.buttons1').removeClass('buttons1');
})
//按钮控制想右滚动
//小圆圈点击控件
btnbox.children('span').click(function(){
    //index(??) 获得选中元素相对于其同胞元素的 index 位置
    var index = $('.button-box').children("span").index(this);
    //index(??) 获得选中元素相对于其同胞元素的 index 位置
    $(this).addClass('buttons1').siblings('.buttons1').removeClass('buttons1');
    console.log(i);
    console.log(index);
    if(index >= i){
        var dif = index-i;
        left = -dif*width;
        boximg.stop().animate({left:left},speed,function(){
        boximg.css("left",0);
        boximg.children("img:lt("+dif+")").appendTo('.scroll-box-img'); 
        });
       }
       else{
        var j = l-(i-index);
        boximg.css("left",(index-i)*width);
        boximg.children("img:lt("+j+")").appendTo('.scroll-box-img');
        boximg.stop().animate({left:0,speed}); 
       }
       i = index;
})
//小圆圈点击控件
box.hover(function(){
    $(this).children('.scroll-box-btn').css({'display':'block'});
},function(){
    $(this).children('.scroll-box-btn').css({'display':'none'});
})
}

$(function () {       //读取轮播事件
    Scroll('scroll-box',300,3000);
   }); 