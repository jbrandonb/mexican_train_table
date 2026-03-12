import { View } from "react-native";
import DominoTile from "../components/dominoTile";
import { Domino } from "../types/domino";

export default function TableScreen() {
	const dominoes: Domino[] = [
		{ id: "d1", left: 12, right: 10 },
		{ id: "d2", left: 5, right: 7 },
		{ id: "d3", left: 13, right: 5 },
		{ id: "d4", left: 2, right: 15 },
		{ id: "d5", left: 1, right: 1 },
	];

	return (
		<View>
			{dominoes.map((domino) => (
				<DominoTile key={domino.id} domino={domino} />
			))}
		</View>
	);
};
