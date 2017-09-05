/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-04 20:22:18
 * @version $Id$
 */
var boxDom = document.getElementById("box");
// boxsize();
//         function boxsize(){
//             var x =window.innerWidth;




//             boxDom.style.width =x+'px';
//             window.onresize=function(){
//             boxsize();
//         }
//         }

    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        //console.log(scrollTop);
        if(scrollTop>666){
            $("#navigation2").css('display','block')
        }
        if(scrollTop<80){
            $("#navigation2").css('display','none')
        }
    })
    $("#navigation2 a:eq(0)").click(function(){
        $("body,html").animate({scrollTop:0},500)
    })

    var index=0;
    var titleDom=document.getElementsByClassName("title")
        greetings();
        function greetings(){

            jianbian(titleDom[index]);
            index++;

            timer=setTimeout(greetings,1000/1);
            if(index==titleDom.length)clearTimeout(timer);
        };
        function jianbian(element){
            //alert(element);
            var num=0;
            var timer1=setInterval(function(){
                num++;
                element.style.opacity=num/10;
                if(num==10)clearInterval(timer1);
            },1000/60);
        }
    var myswiper = new Swiper('.swiper-container',{
            autoplay:5000,//初始化  表示自动切换的时间间隔 切换到下一张停留的时间  ms  默认是0
            loop:true,//无缝轮播
            initialSlide:0,//设定初始化时的slide的索引 默认是0 类型是数字 索引值+1是显示的张数
            //direction:'vertical', //滑动的方向  horizontal（默认）  垂直：vertical
            speed:1000,//滑动的时间 切换开始到结束的时间  ms 默认是0
            autoplayDisableOnInteraction:true,//用户操作swiper 规定是否禁止autoplay 注意：要用鼠标滑动一下slide才可以 操作：触碰 拖动 点击 值：true(默认) false
            autoplayStopOnLast:false,//切换到最后一个slide停止自动切换 false（默认）true(停止)
            grabCursor:true,//抓手 hover的时候是手 拖动的时候是抓手 值：true有抓手 false（默认）
            freeMode:false,//滑动距离 可选值false（默认） true惯性 不自动贴合
            effect:'flip', //切换效果 值：fade(淡入) cube(方块) coverflow（3d流）flip(翻转)
            pagination:'.swiper-pagination',//分页器
            paginationClickable :true,
            paginationType :'progress',
            prevButton:'.swiper-button-prev',//前进后退按钮
            nextButton:'.swiper-button-next',

            /*
                var myswiper = new Swiper('.swiper-container',{
                    wrapperClass:'my-swiper',

                })
            */



        })


