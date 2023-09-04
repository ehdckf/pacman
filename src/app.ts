const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.width = innerWidth;
canvas.height = innerHeight;
const boardImage = new Image();
boardImage.src = 'assets/board.png';
export const c = canvas.getContext('2d') as CanvasRenderingContext2D;
import { Boundary } from './board/Boundary';
import { B } from './interfaces';
import map from './board/map';
import { Hero } from './Hero';
import { Pellet } from './board/Pellet';
addEventListener('DOMContentLoaded', () => {
	init();
	animate();
});

addEventListener('resize', () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	init();
});
const boundaries = [];
const pellets = [];
let hero: Hero;
function init() {
	// boundaries
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			const symbol = map[i][j];

			switch (symbol) {
				case '':
					break;
				case '◦':
				case '○':
					pellets.push(
						new Pellet({
							position: {
								x: j * B,
								y: i * B,
							},
							symbol: map[i][j],
						}),
					);
					break;
				default:
					boundaries.push(
						new Boundary({
							position: {
								x: j * B,
								y: i * B,
							},
							symbol: map[i][j],
						}),
					);
			}
		}
	}

	//hero
	hero = new Hero({
		position: { x: 9 * B, y: 12 * B },
		velocity: { x: 0, y: 0 },
	});
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	boundaries.forEach((boundary) => boundary.draw());
	pellets.forEach((pellet) => pellet.draw());
	c.save();
	hero.update();
	c.restore();
}

addEventListener('keydown', ({ key }) => {
	switch (key) {
		case 'w':
			hero.move('keydown', 'w');
			break;
		case 'a':
			hero.move('keydown', 'a');
			break;
		case 's':
			hero.move('keydown', 's');
			break;
		case 'd':
			hero.move('keydown', 'd');
			break;
	}
});

addEventListener('keyup', ({ key }) => {
	switch (key) {
		case 'w':
			hero.move('keyup', 'w');
			break;
		case 'a':
			hero.move('keyup', 'a');
			break;
		case 's':
			hero.move('keyup', 's');
			break;
		case 'd':
			hero.move('keyup', 'd');
			break;
	}
});
