import { View, Text } from "react-native";
import { Domino } from "../types/domino";

type DominoTileProps = {
	domino: Domino;
};

export default function DominoTile({ domino }: DominoTileProps) {
	return (
		<View>
			<Text>
				[{domino.left} | {domino.right}]
			</Text>
		</View>
	);
}
