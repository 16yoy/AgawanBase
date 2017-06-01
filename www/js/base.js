var game = new Phaser.Game(400,600, Phaser.CANVAS, '');
var wood;
var start;
var instruction;
var about;
var mainState =
	{

		preload:function() 
		{
		game.load.image("bg","img/agawan base.png");
		game.load.image("play","img/play.png");
		game.load.image("instruction","img/instruction.png");
		game.load.image("about","img/about.png");


		},

		create:function() 
		{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		wood = game.add.tileSprite(0,0,800,600, "bg");

		play = game.add.button(110,320,"play",start);
    	play.scale.x= 1;
   		play.scale.y= 1;

   		instruction = game.add.button(100,400,"instruction",instruction);
    	instruction.scale.x= .6;
   		instruction.scale.y= .6;

   		about = game.add.button(100,460,"about",about);
    	about.scale.x= .6;
   		about.scale.y= .6;
		},
  
		update:function() 
		{
		
		},
		
	}

function start ()
{
     window.location.href="agawan1.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function instruction ()
{
     window.location.href="instruction.html";
  {instruction.frame=0}  
setTimeout(function(){
    
instruction.frame=0;
game._paused=false;
},50);
}

function about ()
{
     window.location.href="about.html";
  {about.frame=0}  
setTimeout(function(){
    
about.frame=0;
game._paused=false;
},50);
}

	game.state.add("mainState",mainState);
	game.state.start("mainState");
 