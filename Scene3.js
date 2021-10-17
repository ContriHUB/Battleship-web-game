class Scene3 extends Phaser.Scene {
	constructor() {
		
		super("StartGame");
	}
    preload(){
      
    }
    create(){
      
        
        // onclick on text switch to scene2
        const clickButton = this.add.text(80, 100, 'Start Game', { fill: '#0f0' })
          .setInteractive()
          .on('pointerdown', () => this.scene.start("playGame"))
          //.on('pointerover', () => this.enterButtonHoverState() )
     //.on('pointerout', () => this.enterButtonRestState());
      
    }
   
    
}    
