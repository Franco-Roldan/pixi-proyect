import { Application,Assets,Sprite} from 'pixi.js'


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 600,
	height: 400
});

Assets.add( 'messi','./messi.jpg');
Assets.add( 'clampy', './clampy.png');

Assets.load(['messi','clampy']).then(()=>{
 	

	const messi : Sprite = Sprite.from('messi');
	console.log('Hola Mundo -',messi.width, ' - ', messi.height );

	messi.x = 0;
	messi.y = 0;

 	app.stage.addChild(messi);
});


//clampy.anchor.set(0.5);




