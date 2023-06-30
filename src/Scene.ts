import { Container } from "pixi.js";
import { screen_app } from ".";
import { Completed_level } from "./Completed_level";

export class Scene extends Container{
    constructor(){
        super();
        const Scena_completed_level: Completed_level = new Completed_level();
       
        Scena_completed_level.position.set(((screen_app.width - Scena_completed_level.width) /2), ((screen_app.height - Scena_completed_level.height)/2));
        this.addChild(Scena_completed_level);
    }
}