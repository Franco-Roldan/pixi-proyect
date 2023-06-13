import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container{
    constructor(){
        super();
        const dino : Sprite = Sprite.from('Dino');
        const hat :  Sprite = Sprite.from('Hat');
        
        dino.width = 300;
        dino.height = 300 ;
        //dino.position.set(100, 100);
    
        hat.width = 100;
        hat.height = 100;	
        hat.position.set(115, -55);
    	
        this.addChild(dino);
	    this.addChild(hat);
        
    }
} 