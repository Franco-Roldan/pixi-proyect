import { Container, Sprite } from "pixi.js";
import { Iupdata } from "./IUpData";
import { screen_app } from ".";
import { PhysicsContainer } from "./PhysicsContainer";


export class Dvd extends Container implements Iupdata{

    private dvd_video: Sprite;
    public speed:number = 200; 
    private PhysicDVD: PhysicsContainer;

    constructor(){
        super();

        this.dvd_video = Sprite.from('dvd');
        this.dvd_video.scale.set(0.3); 
        
        this.PhysicDVD = new PhysicsContainer();
        this.PhysicDVD.speed.x = 80;
        this.PhysicDVD.speed.y = 0;
        this.PhysicDVD.acceleration.y = 30;

        this.PhysicDVD.addChild(this.dvd_video);
        this.addChild(this.PhysicDVD);
        
    }
    
    public update(deltaTime: number, _deltaFrame: number): void {
        
        const dt = deltaTime / 1000;
        this.PhysicDVD.update(dt);
        if(this.PhysicDVD.x + this.PhysicDVD.width > screen_app.width){
            this.dvd_video.tint = 0x0000ff;
            this.PhysicDVD.x = screen_app.width - this.PhysicDVD.width;
            this.PhysicDVD.speed.x = Math.abs(this.PhysicDVD.speed.x) * -1;
        }else if(this.PhysicDVD.x < 0){
            this.dvd_video.tint = 0x00ff00;
            this.PhysicDVD.speed.x = Math.abs(this.PhysicDVD.speed.x) * 1;

        }

        if(this.PhysicDVD.y  + this.PhysicDVD.height > screen_app.height){
            this.dvd_video.tint = 0xff0000;
            this.PhysicDVD.y = screen_app.height- this.PhysicDVD.height;
            this.PhysicDVD.speed.y = -230;
        }else if( this.PhysicDVD.y < 0){
            this.dvd_video.tint = 0xffff00;
            this.PhysicDVD.speed.y = 100;
        }

        
    }
}