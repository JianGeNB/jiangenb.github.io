/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-09-12 08:35:56
 * @version $Id$
 */
window.onload=function(){
                var snakelength=6;
                var snake=[];
                var x,y,foodx,foody;
                var score=0;
                var canvas =document.getElementById("box");
                var ctx =canvas.getContext("2d");
                for(var i=0;i<snakelength;i++){
                        snake[i]=({x:i*15,y:0});
                }
                $(".restart").on('click',function(){
                    window.location.reload();
                })

                //console.log(snake);
            game.init(ctx,snake,snakelength,score);
            game.food(ctx,snake,snakelength,true,x,y,foodx,foody,score);
        }
        var game={
            //初始化
            init:function(ctx,snake,snakelength,score){
                //画线
                for(var i=0;i<30;i++){
                    ctx.beginPath();
                    ctx.moveTo(0,15*i);
                    ctx.lineTo(450,15*i);
                    ctx.stroke();
                    ctx.moveTo(15*i,0);
                    ctx.lineTo(15*i,450);
                    ctx.closePath();
                    ctx.stroke();

                }
                //console.log(snake);
                game.drawsnake(ctx,snake,snakelength,score);
            },
                //画蛇
            drawsnake:function(ctx,snake,snakelength,score){
                ctx.fillStyle='black';
                for(var i=0;i<snakelength;i++){
                    //snake.push({x:i*15,y:0});
                    if(i==snakelength-1){ctx.fillStyle='red'}
                    ctx.fillRect(snake[i].x,snake[i].y,15,15);
                }
                //game.food(ctx,snake,snakelength);
            },
            //画食物
            food:function(ctx,snake,snakelength,mark,x,y,foodx,foody,score){
                ctx.fillStyle='green';

                if(mark){
                    foodx=Math.floor(Math.random()*15)*30;
                    foody=Math.floor(Math.random()*15)*30;

                }
                    x=foodx;
                    y=foody;
                    ctx.fillRect(x,y,15,15);

                for(var i=0;i<snakelength-1;i++){
                    if(foodx==snake[i].x&&foody==snake[i].y){
                    food(ctx,snake,snakelength,true,x,y,foodx,foody,score);
                }

                }
                game.sport(ctx,snake,snakelength,mark,x,y,foodx,foody,score);
            },
            //运动
            sport:function(ctx,snake,snakelength,mark,x,y,foodx,foody,score){
                //console.log(snake);
                    document.onkeydown=function(e){
                    var e=e||event;
                    //console.log(e.keyCode)
                    switch (e.keyCode) {
                        case 39 :
                             snake.push({x:snake[snakelength-1].x+15,y:snake[snakelength-1].y});
                            break;
                        case 40:
                            snake.push({x:snake[snakelength-1].x,y:snake[snakelength-1].y+15});
                            break;
                        case 37:
                            snake.push({x:snake[snakelength-1].x-15,y:snake[snakelength-1].y});
                            break;
                        case 38:
                            snake.push({x:snake[snakelength-1].x,y:snake[snakelength-1].y-15});
                            break;

                    }
                    snake.shift();
                     ctx.clearRect(0,0,450,450);
                     game.food(ctx,snake,snakelength,false,x,y,foodx,foody,score);
                     game.init(ctx,snake,snakelength,score);
                     if(snake[snakelength-1].x>435||snake[snakelength-1].y>435||snake[snakelength-1].x<0||snake[snakelength-1].y<0){
                        document.onkeydown=function(e){}
                        $(".score").html("score:"+score+"");
                        $(".tip").css({"display":"block"});

                     }
                     for(var i=0;i<snakelength-1;i++){
                        if(snake[snakelength-1].x==snake[i].x&&snake[snakelength-1].y==snake[i].y){
                                document.onkeydown=function(e){}
                                $(".score").html("score:"+score+"");
                                $(".tip").css({"display":"block"});
                        }
                     }
                     if(snake[snakelength-1].x==x&&snake[snakelength-1].y==y){
                        snakelength+=1;
                        score+=100;
                        //console.log(score);
                        snake.unshift({});
                        game.food(ctx,snake,snakelength,true,x,y,foodx,foody,score);
                        game.init(ctx,snake,snakelength,score);
                     }

                    //game.drawsnake(ctx);

                    //console.log(snake);
                }
            }
        }
