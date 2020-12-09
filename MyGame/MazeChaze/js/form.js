class FORM
{
    constructor(){
    this.title=createElement("h1");
    this.input=createInput("username");
    this.button=createButton("Play");
    this.reset=createButton("Reset");
    console.log("hello");
    }
    hide()
    {
      this.title.hide();
      this.input.hide();
      this.button.hide();
    }
    display()
    {
        this.title.html("Maze Chaze");
        this.title.position(500,10);

        this.input.position(displayWidth/2, displayHeight/2 + 20);
        this.button.position(displayWidth/2, displayHeight/2 + 40);
        this.reset.position(displayWidth/6,displayHeight/6)
        this.button.mousePressed(()=>
        {
            this.title.hide();
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            });
    }
}