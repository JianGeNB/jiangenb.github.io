/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-10 00:43:37
 * @version $Id$
 */
 // 定义图片旋转，鼠标事件,情话特效
$("#box ul li").each(function(i){
            var deg=360/$("#box ul li").size();
            $(this).css({"transform": "rotateY("+deg*i+"deg)translateZ(216px)"})
        })
        var i=0;
        var str="曾经有一份真挚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此,如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加上一个期限，我希望是——一万年。";
        window.onload=function print () {
            document.getElementById("end").innerHTML+=str.charAt(i);
            i++;
            var font =setTimeout(print,150);
            //console.log(i);
            if(i==str.length){
                clearTimeout(font);
            }
        }
        var timer=setInterval(function(){
            $("#end").css({color:color()})
        }, 2000)
        $("#box ul li img").mouseover(function(){
            $(this).animate({height:"300px" ,width:"300px"})
            $(".play").addClass("stop");

        })
        $("#box ul li img").mouseleave(function(){
            $(this).animate({height:"240px" ,width:"240px"});
            $(".play").toggleClass("stop");
        })

