import { Domino } from "./domino"

export type Rotation = 0 | 90 | 180 | 270;

export type TableZone =
	| "center"
	| "player-train"
	| "mexican-train"
	| "private-hand"
	| "boneyard";

export type PlacedDomino = {
	domino: Domino;
	x: number;
	y: number;
	rotation: Rotation;
	zone: TableZone;
	isFaceUp: boolean;
};
