// import { BoundarySymbol } from '../interfaces';

const map = `

◜════════╦════════◝
║◦◦◦◦◦◦◦◦║◦◦◦◦◦◦◦◦║
║◦╔╗◦╔◠╗◦║◦╔◠╗◦╔╗◦║
║○╚╝◦╚◡╝◦⨆◦╚◡╝◦╚╝○║
║◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦║
║◦⊏⊐◦⨅◦⊏═╦═⊐◦⨅◦⊏⊐◦║
║◦◦◦◦║◦◦◦║◦◦◦║◦◦◦◦║
◟══◝◦╠═⊐ ⨆ ⊏═╣◦◜══◞
   ║◦║       ║◦║
═══◞◦⨆ ┌⎺⎺⎺┐ ⨆◦◟═══
    ◦  ⎸   ⎹  ◦
═══◝◦⨅ └⎽⎽⎽┘ ⨅◦◜═══
   ║◦║       ║◦║
◜══◞◦⨆ ⊏═╦═⊐ ⨆◦◟══◝
║◦◦◦◦◦◦◦◦║◦◦◦◦◦◦◦◦║
║◦⊏╗◦⊏═⊐◦⨆◦⊏═⊐◦╔⊐◦║
║○◦║◦◦◦◦◦◦◦◦◦◦◦║◦○║
╠⊐◦⨆◦⨅◦⊏═╦═⊐◦⨅◦⨆◦⊏╣
║◦◦◦◦║◦◦◦║◦◦◦║◦◦◦◦║
║◦⊏══╩═⊐◦⨆◦⊏═╩══⊐◦║
║◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦║
◟═════════════════◞`;

export default map
	.trim()
	.split('\n')
	.map((v) => v.trimEnd().split(''));
