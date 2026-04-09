const arr=["green","red","yellow","blue"];
var gamePattern=[];
var written=[];
var level=0;
var start=false;
$("html").keypress(function(){
    if(!start){
        $("h1").text("level "+level);
        nextsequence();
        start=true;
    }
    
})
function startOver(){
   level=0;
   start=false;
   gamePattern=[];
    written=[];



}
$(".btn").click(function(){
    let i=$(this).attr("id");
    
    written.push(i);
    
    console.log(written);
    checkanswer(written.length-1);
    playaudio(i);
    animatepress(i);
    
    
});

  function checkanswer(currentLevel){
    if (gamePattern[currentLevel] === written[currentLevel]) {
        if (written.length === gamePattern.length){
          setTimeout(function () {
            nextsequence();
          }, 1000);
        }
    }
     else
     {
      playaudio("wrong");
     $("body").addClass("game-over");
     $("#level-title").text("Game Over, Press Any Key to Restart");

     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);

     startOver();
   }   
  
  }
function nextsequence(){
    written=[];
    level++; 
    var randomnumber=Math.floor(Math.random()*4);
    console.log(randomnumber);
    var randomChosenColor=arr[randomnumber];
    gamePattern.push(randomChosenColor);
    
    

        
            $("h1").text("Level "+level);
            setTimeout(function(){
            $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
            playaudio(randomChosenColor);},1000);
             
      
    }
    
   
   

function playaudio(name){
    console.log("playing:", name);
    var audio = new Audio("simon/sounds/" + name + ".mp3");
    audio.play().then(()=>{
        console.log("played");
    }).catch((e)=>{
        console.log("error:", e);
    });
}
function animatepress(i){
     $("#"+ i).addClass("pressed");
    setTimeout(function(){ $("#"+ i).removeClass("pressed");},100)
       
       
   
}



 
