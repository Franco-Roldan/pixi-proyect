import { AnimatedSprite, Container, Texture } from "pixi.js";
import { Iupdata } from "./IUpData";
import { KeyBoard } from "./util/Keyboard";
import { screen_app } from ".";

export class MarioAnimated extends Container implements Iupdata{

    private mario: AnimatedSprite;
    constructor(){
        super();
        
        this.mario = new AnimatedSprite(
            [
                Texture.from('player1'),
                Texture.from('player2'),
                Texture.from('player3'),
            ], 
            true
        );
        
        this.mario.play()
        this.mario.animationSpeed = 0;

        this.mario.anchor.set(0.5);
        this.mario.position.set((this.mario.width/2),(this.mario.height/2));
        this.addChild(this.mario);
        
        
    }

    update(_deltaTime: number, deltaFrame: number): void {
        this.mario.update(deltaFrame);
        
        
        if(KeyBoard.state.get('KeyD') || KeyBoard.state.get('ArrowRight')){
            
            this.mario.animationSpeed = 0.20;
            this.mario.scale.x = 1;
            if(this.mario.x < (screen_app.width - 50)){
                this.mario.x += 5;
            }

        }
        if(KeyBoard.state.get('KeyA') || KeyBoard.state.get('ArrowLeft')){
            this.mario.scale.x = -1;
            this.mario.animationSpeed = 0.20;
            if(this.mario.x > 50){
                this.mario.x -= 5;
            }
            
        }
        if(!(KeyBoard.state.get('KeyA') || KeyBoard.state.get('ArrowRight')) && !(KeyBoard.state.get('KeyD') || KeyBoard.state.get('ArrowLeft'))){
            this.mario.animationSpeed = 0;
            this.mario.texture = Texture.from('player1');
        }

    }
    
}