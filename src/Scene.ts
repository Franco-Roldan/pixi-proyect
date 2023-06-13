import { Container } from "pixi.js";
import { DinoHat } from "./Dinohat";
import { screen_app } from ".";

export class Scene extends Container{
    constructor(){
        super();
        const dinowithHat: DinoHat = new DinoHat();
        dinowithHat.position.set(((screen_app.with - dinowithHat.width) /2), ((screen_app.height - dinowithHat.height)/2));
        this.addChild(dinowithHat);
    }
}