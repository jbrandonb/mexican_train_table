export type Domino = {
	id: string;
	left: number;
	right: number;
	rotation: 0 | 90 | 180 | 270;
	faceUp: boolean;
};
