const boardImage = new Image();
boardImage.src = 'assets/board.png';
import type { Position } from './interfaces';
import { c } from './app';
const crop = {
	'╦': 0, //"3-way-down"
	'╣': 32, //"3-way-left"
	'╠': 64, //"3-way-right"
	'╩': 96, //"3-way-up"
	'╬': 128, //"4-way"
	'╗': 160, //"box-corner-down"
	'╝': 192, //"box-corner-left"
	'╔': 224, //"box-corner-right"
	'╚': 256, //"box-corner-up"
	'◠': 288, //"box-edge-down"
	')': 320, //"box-edge-left"
	'(': 352, //"box-edge-right"
	'◡': 384, //"box-edge-up"
	'⊏': 416, //"cap-down-left"
	'⊐': 448, //"cap-down-right"
	'⨅': 480, //"cap-down-up"
	'⨆': 512, //"cap-down"
	'◜': 544, //"corner-down"
	'◝': 576, //"corner-left"
	'◟': 608, //"corner-right"
	'◞': 640, //"corner-up"
	'┌': 672, //"fence-corner-down"
	'┐': 704, //"fence-corner-left"
	'└': 736, //"fence-corner-right"
	'┘': 768, //"fence-corner-up"
	'⎽': 800, //"fence-edge-down"
	'⎸': 832, //"fence-edge-left"
	'⎹': 864, //"fence-edge-right"
	'⎺': 896, //"fence-edge-up"
	'▣': 928, //"single"
	'═': 960, //"straight-horiz"
	'║': 992, //"straight-vert"
	'◦': 1024, //"white-dot-small"
	'○': 1056, //"white-dot"
};

export class Boundary {
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
