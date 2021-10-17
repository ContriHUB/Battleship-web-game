//adding a button class for button styling
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () =>callback())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
    }
}
class Scene3 extends Phaser.Scene {
    
	constructor() {
		
		super("StartGame");
       
	}
    
    create(){
        this.config = this.game.config;
		var config = this.config;
        // setting the default background 
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
		this.background.setOrigin(0,0);
    
       // creating an object of button to start game
        const button = new Button(125, 165, 'Start Game', this, () =>  this.scene.start("playGame"));
    
    }
   
    
}    
