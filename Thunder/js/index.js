/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-07 14:23:02
 * @version $Id$
 */
window.onload=function(){
                game.exe();
            }
        var game={
            //执行
            exe:function(){
                document.body.style.background = 'black';
                var boxDom=document.createElement("div");
                    boxDom.id='box';
                    document.body.appendChild(boxDom);
                    game.init(boxDom);

            },
            //初始化
            init:function(boxDom){
                var h1Dom=document.createElement("h1");

                    h1Dom.innerHTML='雷霆战机v1.0';
                    boxDom.appendChild(h1Dom);
                var html='';
                var index=0;
                for(var i=0;i<4;i++){
                    var columnsDom=document.createElement('p');
                    columnsDom.index=i;
                    switch(i){
                        case(0):html='简单模式';break;
                        case(1):html='一般模式';break;
                        case(2):html='困难模式';break;
                        case(3):html='外挂模式';
                                columnsDom.style.background = 'red';
                            break;

                    }

                    columnsDom.innerHTML=html;
                    boxDom.appendChild(columnsDom);
                    columnsDom.addEventListener('click',function(e){
                        e=e||event;
                        game.start(e,boxDom,this.index);
                    })
                }


            },
            //自己
            start:function(e,boxDom,index){
                var speed=1;
                if(index==3){
                    speed=index;
                }
                //console.log(index);
                boxDom.innerHTML='';
                var scoreDom=document.createElement('span');
                var score=0;
                scoreDom.className='score';
                scoreDom.innerHTML=score;
                boxDom.appendChild(scoreDom);
                var plane =document.createElement('img');
                plane.className='plane';
                plane.src='images/plane.png';
                boxDom.appendChild(plane);
                plane.style.left = e.pageX-boxDom.offsetLeft-10-plane.offsetWidth/2 + 'px';
                plane.style.top = e.pageY-boxDom.offsetTop-10-plane.offsetHeight/2 + 'px';

                document.onmousemove=function(e){
                    e=e||event;
                    var x=e.pageX-boxDom.offsetLeft-10-plane.offsetWidth/2;
                    var y=e.pageY-boxDom.offsetTop-10-plane.offsetHeight/2;
                    var minleft=-plane.width/2;
                    var maxleft=boxDom.offsetWidth-plane.width/2-20;
                    var mintop=0;
                    var maxtop=boxDom.offsetHeight-plane.height-20;
                    x=Math.min(x,maxleft);
                    x=Math.max(x,minleft);
                    y=Math.min(y,maxtop);
                    y=Math.max(y,mintop);
                    //console.log(boxDom.offsetHeight);
                    plane.style.left = x + 'px';
                    plane.style.top = y + 'px';
                }
                plane.timerb=setInterval(function(){
                    if(index==3){

                        var bulletDom =document.createElement('img');
                    bulletDom.src='images/bullet.png';
                    bulletDom.className='bullet';
                    bulletDom.style.left=plane.offsetLeft+(plane.width)/2 +'px';
                    bulletDom.style.top=plane.offsetTop-(plane.height) +'px';
                    bulletDom.timer=setInterval(function(){
                         bulletDom.style.top=bulletDom.offsetTop-5+'px';
                         //console.log(bulletDom.height+' '+bulletDom.style.top);
                         //console.log(bulletDom.style.top);
                         if(parseInt(bulletDom.style.top)<=-bulletDom.height){
                            clearInterval(bulletDom.timer);
                            bulletDom.parentNode.removeChild(bulletDom);
                         }

                    },20);
                    //console.log(bulletDom.style.left);
                    boxDom.appendChild(bulletDom);
                         var bulletDom2 =document.createElement('img');
                    bulletDom2.src='images/bullet.png';
                    bulletDom2.className='bullet';
                    bulletDom2.style.left=plane.offsetLeft+(plane.width)/2+10 +'px';
                    bulletDom2.style.top=plane.offsetTop-(plane.height) +'px';
                    bulletDom2.timer=setInterval(function(){
                         bulletDom2.style.top=bulletDom2.offsetTop-5+'px';
                         //console.log(bulletDom.height+' '+bulletDom.style.top);
                         //console.log(bulletDom.style.top);
                         if(parseInt(bulletDom2.style.top)<=-bulletDom2.height){
                            clearInterval(bulletDom2.timer);
                            bulletDom2.parentNode.removeChild(bulletDom2);
                         }

                    },20);
                    //console.log(bulletDom.style.left);
                    boxDom.appendChild(bulletDom2);
                    }else{}
                    var bulletDom1 =document.createElement('img');
                    bulletDom1.src='images/bullet.png';
                    bulletDom1.className='bullet';
                    bulletDom1.style.left=plane.offsetLeft+(plane.width)/2-10 +'px';
                    bulletDom1.style.top=plane.offsetTop-(plane.height) +'px';
                    bulletDom1.timer=setInterval(function(){
                         bulletDom1.style.top=bulletDom1.offsetTop-5+'px';
                         //console.log(bulletDom.height+' '+bulletDom.style.top);
                         //console.log(bulletDom.style.top);
                         if(parseInt(bulletDom1.style.top)<=-bulletDom1.height){
                            clearInterval(bulletDom1.timer);
                            bulletDom1.parentNode.removeChild(bulletDom1);
                         }

                    },20);
                    //console.log(bulletDom.style.left);
                    boxDom.appendChild(bulletDom1);
                },300);
                 game.enemyplane(boxDom,plane,score,scoreDom,index);
            },
            //敌方
            enemyplane:function(boxDom,plane,score,scoreDom,index){
                //console.log(index);
                var speed2=index+1;
                var timer=setInterval(function(){
                    var enemyDom =document.createElement('img');
                    enemyDom.src='images/enemy.png';
                    enemyDom.className='enemy';
                    //enemyDom.style.left=plane.offsetLeft+(plane.width)/2 +'px';
                    enemyDom.style.top=0 +'px';
                    enemyDom.style.left=Math.random()*(boxDom.offsetWidth-20)+ 'px';
                    boxDom.appendChild(enemyDom);
                    var y=Math.random()*5+1;
                    enemyDom.timer=setInterval(function(){
                         enemyDom.style.top=enemyDom.offsetTop+y+'px';
                         //console.log(boxDom.offsetHeight);
                         //console.log(bulletDom.style.top);
                         if(parseInt(enemyDom.style.top)>=boxDom.offsetHeight-enemyDom.height-10){
                            clearInterval(enemyDom.timer);
                            enemyDom.parentNode.removeChild(enemyDom);
                         }

                    },13);
                    //console.log(bulletDom.style.left);
                    enemyDom.timerpz=setInterval(function(){
                        //console.log($(".bullet").length);

                        // for(var i=0;i<$(".bullet").length;i++){
                        //     //console.log($(".bullet").eq(i));}
                        //  game.impact(enemyDom,$(".bullet").eq(i))}
                        var aBiu = getClass('bullet');
                        //var plane = getClass('plane');
                            for (var i=0; i<aBiu.length ;i++ )
                            {
                                if(game.impact(enemyDom , aBiu[i])) {
                                    boxDom.removeChild(aBiu[i]);
                                    clearInterval(enemyDom.timerpz);
                                    clearInterval(enemyDom.timer);
                                    enemyDom.src='images/boom2.png';
                                    setTimeout(function(){
                                    if(enemyDom.parentNode){
                                    score+=100;
                                    scoreDom.innerHTML=score;

                                        enemyDom.parentNode.removeChild(enemyDom);
                                    }
                                    },50);
                                }
                                if(game.impact(enemyDom,plane)){

                                    enemyDom.src='images/boom2.png';
                                    plane.src='images/boom.png';
                                    clearInterval(enemyDom.timerpz);
                                    clearInterval(enemyDom.timer);
                                    clearInterval(plane.timerb);
                                    clearInterval(timer);
                                    //clearInterval(game.enemyplane);
                                    //clearInterval(bulletDom.timer);
                                    document.onmousemove=null;
                                    setTimeout(function(){

                                        boxDom.innerHTML='';

                                        var overDom=document.createElement("div");
                                        overDom.id="end";
                                        overDom.innerHTML='游戏结束<span style="font-size:20px"></br>您的得分是:'+score+'</span>';
                                        //overDom.style.left = boxDom.offsetLeft+overDom.offsetWidth+'px';

                                        boxDom.appendChild(overDom);
                                        var restartDom=document.createElement("div");
                                        restartDom.id='restart';

                                        restartDom.style.left=(boxDom.offsetWidth-20)/2-restartDom.offsetWidth/2 +'px';
                                        restartDom.innerHTML='重新开始';
                                        restartDom.onclick=function(){
                                            location.reload();
                                        }
                                        boxDom.appendChild(restartDom);
                                    }, 1000);
                                    //alert("游戏结束");
                                    break;

                                    //clearInterval(enemyplane.timer);
                                }
                            }

                    },50)

                },1000/speed2);
            },
            //碰撞
            impact:function(obj1,obj2){
                 var T1 = obj1.offsetTop,
                        B1 = T1 + obj1.clientHeight,
                        L1 = obj1.offsetLeft,
                        R1 = L1 + obj1.clientWidth;

                    var T2 = obj2.offsetTop,
                        B2 = T2 + obj2.clientHeight,
                        L2 = obj2.offsetLeft,
                        R2 = L2 + obj2.clientWidth;

                    if(R2<L1||B2<T1||L2>R1||T2>B1){
                        return false
                    }else{return true}

            }

        }
        //类获取兼容
        function getClass( cName , parent ){
                parent = parent||document;
                var arr = [];
                if ( document.getElementsByClassName )
                {
                    var x = parent.getElementsByClassName(cName);
                    for (var i in x )
                    {
                        arr[i] = x[i];
                    }
                }
                else
                {
                    var allE = parent.getelmentsByTagName('*');
                    for (var i=0;i<allE.length;i++ )
                    {
                        var arrC = allE[i].className.split(' ');
                        for (var j=0;j<arrC.length;j++ )
                        {
                            if ( arrC[j] == cName )
                            {
                                arr.push( allE[i] );
                                break;
                            }
                        }
                    }
                }
                return arr;
            };
