var game = new Phaser.Game(400, 600, Phaser.CANVAS, '');
var background;
var back;
var mainState =
 {

    preload:function(){
        game.load.image("background","img/wood2.png");
        game.load.image("back","img/back.png");

    },

    create:function(){
    background = game.add.tileSprite(0,0,800,600, "background");
    
    back = game.add.button(280,10,"back",back);
    back.scale.x= .6;
    back.scale.y= .6;
 
    },


    update: function() {

      
    },
}

function back ()
{
     window.location.href="index.html";
  {back.frame=0}  
setTimeout(function(){
    
back.frame=0;
game._paused=false;
},50);
}

    game.state.add("mainState",mainState);
    game.state.start("mainState");