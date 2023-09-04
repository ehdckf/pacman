const boardImage = new Image();
boardImage.src = 'assets/board.png';
import type { Position } from '../interfaces';
import { c } from '../app';
const crop = {
	'◦': 1024, //"white-dot-small"
	'○': 1056, //"white-dot"
};

export class Pellet {
	position: Position;
	cropX: number;
	constructor({ position, symbol }: { position: Position; symbol: any }) {
		this.position = position;
		this.cropX = crop[symbol];
	}

	draw() {
		c.drawImage(
			boardImage,
			this.cropX,
			0,
			32,
			32,
			this.position.x,
			this.position.y,
			32,
			32,
		);
	}
}
