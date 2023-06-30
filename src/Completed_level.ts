import { Container, NineSlicePlane, Sprite, Text, Texture} from "pixi.js";

export class Completed_level extends Container{

    private text_key_press: Text;

    constructor(){
        super();
        
        const base_texture = new NineSlicePlane(
            Texture.from('base_texture'),
            100,100,100,100
        );
        base_texture.height= 500;

        const frame_top: Sprite = Sprite.from('frame_top');
        const text_title: Text = new Text(
            'COMPLETED LEVEL', {fontSize:36, fill:0x839192}
        );
        text_title.position.set((frame_top.width/2) - (text_title.width/2), (frame_top.height/2) - (text_title.height/2))
        frame_top.addChild(text_title);

        this.addChild(base_texture);
        this.addChild(frame_top);

        const newStar = new Star();
        newStar.position.set((base_texture.width/2) - (newStar.width/2), 100)
        base_texture.addChild(newStar);

        const score_money = new Score('1200', 'money_icon');
        const score_shield = new Score('50', 'shield');
        
        score_money.scale.set(0.7);
        score_money.position.set((base_texture.width/2) - (score_money.width/2), 240);
        score_shield.scale.set(0.7)
        score_shield.position.set((base_texture.width/2) - (score_money.width/2), 250 + score_money.height)

        base_texture.addChild(score_money);
        base_texture.addChild(score_shield);

        const button_cancel = new Button('Cancel', 'icon_cancel');
        button_cancel.position.set(Math.round(base_texture.width/3) - (button_cancel.width/2), base_texture.height - button_cancel.height - 30);
        
        //button_cancel.cancel();

        const button_next = new Button('Next', 'icon_next');
        button_next.position.set(Math.round((base_texture.width/3)*2) - (button_next.width/2), base_texture.height - button_next.height - 30)

        base_texture.addChild(button_cancel);
        base_texture.addChild(button_next);

        const frame_letf_bottom: Sprite = Sprite.from('border_left_bottom');
        frame_letf_bottom.anchor.set(1,1);
        frame_letf_bottom.angle = 90;
        frame_letf_bottom.position.set(0, base_texture.height);

        const frame_right_bottom: Sprite = Sprite.from('border_right_bottom');
        frame_right_bottom.anchor.set(1,0);
        frame_right_bottom.angle = 90;
        frame_right_bottom.position.set(base_texture.width, base_texture.height);

        base_texture.addChild(frame_letf_bottom);
        base_texture.addChild(frame_right_bottom);

        const vertical_line_1: Sprite = Sprite.from('vertical_line');
        const vertical_line_2: Sprite = Sprite.from('vertical_line');
        
        vertical_line_1.width= 300;
        vertical_line_2.width= 300; 
        vertical_line_1.position.set(25, (base_texture.height/2) - (vertical_line_1.width/2));
        vertical_line_2.position.set((base_texture.width - 20), (base_texture.height/2) - (vertical_line_2.width/2));
        
        vertical_line_1.angle = 90;
        vertical_line_2.angle = 90;

        base_texture.addChild(vertical_line_1);
        base_texture.addChild(vertical_line_2);

        this.text_key_press = new Text('space key press', {fontSize: 18, fill:0x00000});
        this.text_key_press.position.set((base_texture.width - this.text_key_press.width)/2, 220);
        
        base_texture.addChild(this.text_key_press);

        document.addEventListener('keydown', this.onkeypress);

    }
    
    public onkeypress(e:KeyboardEvent): void{
        console.log(e);

        //this.text_key_press.text = "hola"; 
        
    }
}

class Star extends Container{
    constructor(){
        super();
        const star1: Sprite = Sprite.from('star');
        const star2: Sprite = Sprite.from('star');
        const star3: Sprite = Sprite.from('star');
        
        star1.scale.set(1);
        star2.scale.set(1.5);
        star3.scale.set(1);
        
        star1.position.set(0, star2.height/2);
        star2.position.set(star1.width + 10,0);
        star3.position.set(star1.width + star2.width + 10, star2.height/2);


        this.addChild(star1);
        this.addChild(star2);
        this.addChild(star3);
    }
}

class Score extends Container{

    public text:string;

    constructor(text:string, sprite_text:string){
        super();

        this.text = text;

        const frame_score: Sprite = Sprite.from('frame_score');
        const icon: Sprite = Sprite.from(sprite_text);
        const text_money: Text = new Text(
            this.text, {fontSize: 36, fill:0xffffff}
        );

        icon.position.set(15, (frame_score.height/2) - (icon.height/2));
        text_money.position.set((frame_score.width/2) - (text_money.width/2), (frame_score.height/2) - (text_money.height/2))
        frame_score.addChild(icon);
        frame_score.addChild(text_money);

        this.addChild(frame_score);

    }
}

class Button extends Container{

    private text:string;
    private icon_button:string;
    private frame_button:Sprite;
    constructor(text:string,icon_button:string){
        super(); 
        this.text = text;
        this.icon_button = icon_button;

        this.frame_button = Sprite.from('frame_button');
        const icon: Sprite = Sprite.from(this.icon_button);
        const text_button: Text = new Text(
            this.text, {fontSize: 24, fill:0x839192}
        );
        
        icon.scale.set(0.7);
        icon.position.set(10,(this.frame_button.height/2) - (icon.height/2));
        text_button.position.set(15 +icon.width, (this.frame_button.height/2) - (text_button.height/2));
        
        this.frame_button.addChild(icon);
        this.frame_button.addChild(text_button);

        this.addChild(this.frame_button);

        this.frame_button.on("pointerdown", this.Onmousedown, this);
        this.frame_button.on("pointerup", this.Onmouseup, this)
        this.frame_button.interactive = true;

        


    }

    public Onmousedown(): void{
        
        console.log('click');
        this.frame_button.texture = Texture.from('frame_button_down');
        this.frame_button.cursor = 'pointer';
    }
    public Onmouseup():void{

        this.frame_button.texture = Texture.from('frame_button');
    }



}