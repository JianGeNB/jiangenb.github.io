/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-09 23:11:48
 * @version $Id$
 */
$(function(){
    var snow=function(){
                var  startleft=$(document).width()*Math.random()-100,
                    endleft=startleft-200*Math.pow(-1,Math.round(Math.random()))+Math.random()*200,
                    height=$(document).height(),
                    speed=5000*Math.random()+5000,
                    icon=$("<div class='snow'>").css({
                    position:'absolute',
                    top:'-50px',
                    fontSize:10*Math.random()+10,
                    color:'white'

                }).html("&#10052;")


                icon.appendTo("body").css({
                    width:'50px',
                    height:'50px',
                    left:startleft+'px'
                }).animate({
                    top:$(document).height()-30+'px',
                    left:endleft
                },speed,'linear',function(){
                    $(this).remove();
                });
            }
            setInterval(snow,500);
            snow();
})
