import { Container, Sprite } from 'pixi.js';
import { screen_app } from ".";


export class background extends Container{
    constructor(){
        super();
        const b1:Sprite = Sprite.from('fondo1');
        const b2:Sprite = Sprite.from('fondo2');
        const b3:Sprite = Sprite.from('fondo3');
        const b4:Sprite = Sprite.from('fondo4');
        const b5:Sprite = Sprite.from('fondo5');

        b1.scale.set(1.5);
        b2.scale.set(1.5);
        b3.scale.set(1.5);
        b4.scale.set(1.5);
        b5.scale.set(1.5);

        b1.position.set((screen_app.width - b1.width)/ 2, (screen_app.height - b1.height) / 2);
        b2.position.set((screen_app.width - b1.width)/ 2, (screen_app.height - b1.height) / 2);
        b3.position.set((screen_app.width - b1.width)/ 2, (screen_app.height - b1.height) / 2);
        b4.position.set((screen_app.width - b1.width)/ 2, (screen_app.height - b1.height) / 2);
        b5.position.set((screen_app.width - b1.width)/ 2, (screen_app.height - b1.height) / 2);


        this.addChild(b1);
        this.addChild(b2);
        this.addChild(b3);
        this.addChild(b4);
        this.addChild(b5);
    }
}