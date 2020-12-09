class Game
{
    constructor(){
     
    }
   getState()
   {
     var gameStateRef=database.ref('GameState').on("value",(data)=>
     {
         gameState=data.val();
     });
   } 
   update(state)
   {
      database.ref('/').update({
          GameState:state
      })
   }
    
   async start(){
       if(gameState==0){
        console.log("hi");
           player=new Player();
           
           var playerCountRef=await database.ref('PlayerCount').once("value");
           if(playerCountRef.exists()){
               playerCount=playerCountRef.val();
               player.getCount();
           }
      
       form=new FORM();
       form.display();
       }
   }
   play()
   {

   }
}