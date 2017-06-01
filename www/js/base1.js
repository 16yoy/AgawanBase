var game = new Phaser.Game(400, 600, Phaser.CANVAS, '');
var haha1;
var background;
var restart;
var quit;
var ai;
var play;

var mainState =
 {

    preload:function(){
        game.load.image("background","img/wood.png");
        game.load.image("restart","img/restart.png");
        game.load.image("quit","img/quit.png");
        game.load.spritesheet("haha1","img/haha1.png",48,83);
        game.load.spritesheet("ai","img/ai.png",48,83);
        game.load.image("retry","img/restart.png");
        game.load.spritesheet("button","img/right.png",56,50);
        game.load.spritesheet("button1","img/left.png",56,50);
        game.load.spritesheet("button2","img/up.png",56,50);


    },

    create:function(){
    background = game.add.tileSprite(0,0,800,600, "background");

    restart = game.add.button(20,10,"restart",back);
    restart.scale.x= 1;
    restart.scale.y= 1;

    quit = game.add.button(280,10,"quit",quit);
    quit.scale.x= 1;
    quit.scale.y= 1;

    player = game.add.sprite(150,400,'haha1');
    player.scale.x = 1;
    player.scale.y = 1;

    agaw= game.add.sprite(40,50,'ai');
    agaw.scale.x = 1;
    agaw.scale.y = 1;

    game.physics.enable(player);
    game.physics.enable(agaw);

        player.body.collideWorldBounds = true;
        player.animations.add('walk-left',[7,8,9,10,11,12,13],10,true);
        player.animations.add('walk-down',[0,1,2,3,4,5,6],7,true);
        player.animations.add('walk-right',[14,15,16,17,18,19,20],10,true);
        player.animations.add('walk-up',[21,22,23,24,25,26,27],10,true);

        game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

        agaw.body.collideWorldBounds=true;
        agaw.animations.add('walk-left',[7,8,9,10,11,12,13],7,true);
        agaw.animations.add('walk-down',[0,1,2,3,4,5,6],7,true);
        agaw.animations.add('walk-right',[14,15,16,17,18,19,20],20,true);
        agaw.animations.add('walk-up',[21,22,23,24,25,26,27],8,true);

        gameOverText = game.add.text(30,250,'',{fill:"red",font:"Bold 50px Calibri Body "});

        button = game.add.button(300,535,"button",right);
        button.scale.x = 1;
        button.scale.y= 1;

        button1 = game.add.button(200,535,"button1",left);
        button1.scale.x = 1;
        button1.scale.y= 1;

        button2 = game.add.button(20,535,"button2",up);
        button2.scale.x = 1;
        button2.scale.y= 1;
    },


    update: function() {
        game.physics.arcade.overlap(agaw,player,patayplayer)

        agaw.animations.play("walk-right");
        agaw.body.velocity.x= 100;
        // agaw.animations.play("walk-left");
        // agaw.body.velocity.x= -100;

         keyboard = game.input.keyboard.createCursorKeys();

            /*if (keyboard.left.isDown){
                player.animations.play('walk-left');
                player.body.velocity.x = -90;
            }
            else if(keyboard.up.isDown){
                player.animations.play('walk-up');
                player.body.velocity.y = -90;
                
            }
            else if(keyboard.down.isDown){
                player.animations.play('walk-down');
                player.body.velocity.y = 90;
            }
            else if(keyboard.right.isDown){
                player.animations.play('walk-right');
                player.body.velocity.x = 90;
            }
            
            else if(keyboard.left.isDown){
                if(keyboard.up.isDown){
                    player.animations.play('walk-down-left');
                }

            }
            else if(keyboard.right.isDown){
                if(keyboard.up.isDown){
                    player.animations.play('walk-right-down');
                }

            }
            
            
            else{
                player.animations.stop();
                player.body.velocity.y = 0;
                player.body.velocity.x = 0;
                player.frame = 1;

            }*/
    },
}
function left(){
     player.animations.play('walk-left');
                player.body.velocity.x = -90;
    }
function right(){
    player.animations.play('walk-right');
    player.body.velocity.x = 90;
}
function up(){
     player.animations.play('walk-up');
                player.body.velocity.y = -90;
}
function back ()
{
     window.location.href="agawan1.html";
  {restart.frame=0}  
setTimeout(function(){
    
restart.frame=0;
game._paused=false;
},50);
}


function quit ()
{
     window.location.href="index.html";
  {quit.frame=0}  
setTimeout(function(){
    
quit.frame=0;
//game.input.onTap.addOnce(tuloy,game);
},50);
}
function patayplayer(agaw,player){
    player.kill();
    gameOverText.text = "Game Over!!!!!! \n click restart ";
    //game._paused = true;
    

}
function tuloy(){
    game._paused=false;
}
function next(){
game.state.start("mainState" ,mainState, true);
  
        }

function walkright(){
button.frame =1;
if(player.body.touching.down){
player.animations.play("walk-right");
player.body.velocity.x = 500;

}
setTimeout(function(){
button.frame=0;
},200)
}

function walkleft(){
button1.frame =1;
if(player.body.touching.down){
player.animations.play("walk-left");
player.body.velocity.x = -500;
}
setTimeout(function(){
button1.frame=0;
},200)
}

function jump(){
button2.frame =1;
if(player.body.touching.down){
player.body.velocity.y=-600;
}
setTimeout(function(){
button2.frame=0;
},500)
}

    game.state.add("mainState",mainState);
    game.state.start("mainState"); 