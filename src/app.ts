const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.width = innerWidth;
canvas.height = innerHeight;
const boardImage = new Image();
boardImage.src = 'assets/board.png';
export const c = canvas.getContext('2d') as CanvasRenderingContext2D;
import { Boundary } from './Boundary';
import { B } from './interfaces';
import map from './game/map';
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

function init() {
	// boundaries
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			if (map[i][j] != '   ') {
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
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	boundaries.forEach((boundary) => boundary.draw());
}
