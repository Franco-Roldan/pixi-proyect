import { Application,Assets} from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
export const screen_app = {with: app.screen.width, height: app.screen.height}

const Canva = document.getElementById('pixi-canvas');
console.log(Canva!.style.width, Canva!.style.height)
window.addEventListener('resize', () => {
	console.log('resized');
	
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight ) /2);

	if(app.view.style){
		app.view.style.width = gameWidth + 'px';
		app.view.style.height = gameHeight + 'px';
		
		

		Canva!.style.marginLeft = marginHorizontal + 'px';
		Canva!.style.marginRight = marginHorizontal + 'px';

		Canva!.style.marginTop = marginVertical + 'px';
		Canva!.style.marginBottom = marginVertical + 'px';
	
	}

});
window.dispatchEvent( new Event('resize'));

Assets.addBundle( 'myassets', assets);
Assets.loadBundle(['myassets']).then(()=>{
 	
	const myscene = new Scene();
	
 	app.stage.addChild(myscene);
	
});


//clampy.anchor.set(0.5);




