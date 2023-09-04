import { Position } from '../interfaces';
const gameImage = new Image();
gameImage.src = 'assets/game.png';
import { c } from '../app';
import map from '../board/map';
const ROTATE_DATA = {
	w: {
		rotate: 3,
		x: -32,
		y: 0,
	},
	a: {
		rotate: 2,
		x: -32,
		y: -32,
	},
	s: {
		rotate: 1,
		x: 0,
		y: -32,
	},
	d: {
		rotate: 0,
		x: 0,
		y: 0,
	},
	x: {
		rotate: 2,
		x: -32,
		y: -32,
	},
};

export class Hero {
	static speed = 2;
	position: Position;
	velocity: Position;
	animation: number;
	lastKey: 'w' | 'a' | 's' | 'd' | 'x';
	keyPressed: {
		w: boolean;
		a: boolean;
		s: boolean;
		d: boolean;
	};

	constructor({
		position,
		velocity,
	}: {
		position: Position;
		velocity: Position;
	}) {
		this.position = position;
		this.velocity = velocity;
		this.keyPressed = {
			w: false,
			a: false,
			s: false,
			d: false,
		};
		this.lastKey = 'x';
	}

	public move(event: 'keydown' | 'keyup', key: 'w' | 'a' | 's' | 'd') {
		switch (event) {
			case 'keydown':
				this.keyPressed[key] = true;
				this.lastKey = key;
				break;
			case 'keyup':
				this.keyPressed[key] = false;
				break;
		}
	}

	private init() {}

	update() {
		// console.log('raw: ', this.position.y / 32);
		// console.log('column: ', this.position.x / 32);
		const row = Math.floor(this.position.y / 32);
		const column = Math.floor(this.position.x / 32);

		if (
			// this.keyPressed.w &&
			this.lastKey == 'w'
		) {
			this.velocity.y = -Hero.speed;
			this.velocity.x = 0;
		} else if (
			// this.keyPressed.a &&
			this.lastKey == 'a'
		) {
			// console.log(map)
			// console.log(map[row][column]);
			// console.log(map[row].slice(0, column - 1));
			const row = Math.floor(this.position.y / 32);
			const column = Math.floor(
				(this.position.x - Hero.speed) / 32,
			);
			// console.log(map[row][column - 1]);
			// console.log(
			// 	`x: ${(this.position.x + 16) / 32} y:${
			// 		(this.position.y + 16) / 32
			// 	}`,
			// );
			if ([' ', '◦', '○'].includes(map[row][column])) {
				this.velocity.x = -Hero.speed;
				this.velocity.y = 0;
			} else {
				this.velocity.x = 0;
				this.velocity.y = 0;
			}
		} else if (
			// this.keyPressed.s &&
			this.lastKey == 's'
		) {
			const row = Math.floor(this.position.y / 32);
			const column = Math.ceil(
				(this.position.y + Hero.speed) / 32,
			);
			// console.log(map[row].slice(column));
			if ([' ', '◦', '○'].includes(map[row][column])) {
				this.velocity.y = Hero.speed;
				this.velocity.x = 0;
			} else {
				this.velocity.x = 0;
				this.velocity.y = 0;
			}
		} else if (
			// this.keyPressed.d &&
			this.lastKey == 'd'
		) {
			const row = Math.floor(this.position.y / 32);
			const column = Math.ceil(
				(this.position.x + Hero.speed) / 32,
			);
			// console.log(map[row].slice(column));
			if ([' ', '◦', '○'].includes(map[row][column])) {
				this.velocity.x = Hero.speed;
				this.velocity.y = 0;
			} else {
				this.velocity.x = 0;
				this.velocity.y = 0;
			}
		}
		this.draw();

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	draw() {
		c.translate(this.position.x, this.position.y);
		c.rotate((Math.PI * ROTATE_DATA[this.lastKey].rotate) / 2);
		c.drawImage(
			gameImage,
			0,
			107,
			32,
			32,
			ROTATE_DATA[this.lastKey].x,
			ROTATE_DATA[this.lastKey].y,
			32,
			32,
		);
		const myImg = c.getImageData(
			this.position.x,
			this.position.y,
			32,
			32,
		);
		for (let i = 0; i < myImg.data.length; i += 4) {
			myImg.data[i] = 255;
			myImg.data[i + 1] = 234;
			myImg.data[i + 2] = 0;
		}
		c.putImageData(
			myImg,
			this.position.x,
			this.position.y,
			0,
			0,
			32,
			32,
		);

		/*
		c.drawImage(
			gameImage,
			0,
			107,
			32,
			32,
			this.position.x,
			this.position.y,
			32,
			32,
		);
		const myImg = c.getImageData(
			this.position.x,
			this.position.y,
			32,
			32,
		);
		for (let i = 0; i < myImg.data.length; i += 4) {
			myImg.data[i] = 255;
			myImg.data[i + 1] = 234;
			myImg.data[i + 2] = 0;
		}
		c.putImageData(
			myImg,
			this.position.x,
			this.position.y,
			0,
			0,
			32,
			32,
		);
		*/
	}
}
