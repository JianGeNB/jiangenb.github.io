/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-04 20:22:18
 * @version $Id$
 */
var boxDom = document.getElementById("box");
boxsize();
        function boxsize(){
            var x =window.innerWidth;




            boxDom.style.width =x+'px';
            window.onresize=function(){
            boxsize();
        }
        }
$(function(){

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
})

