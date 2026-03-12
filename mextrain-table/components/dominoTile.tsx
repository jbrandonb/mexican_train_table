import { View, StyleSheet, Text } from "react-native";
import { Domino } from "../types/domino";

type DominoTileProps = {
	domino: Domino;
};

const dominoStyles = StyleSheet.create({
	tile: {
		width: 80,
		height: 40,
		padding: 4,
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 6,
		flexDirection: "row",
		backgroundColor: "white",
	},

	half: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	divider: {
		width: 2,
		backgroundColor: "black",
	},

	value: {
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default function DominoTile({ domino }: DominoTileProps) {
	return (
		<View style={dominoStyles.tile}>
			<View style={dominoStyles.half}>
				<Text>
					{domino.left}
				</Text>
			</View>
			<View style={dominoStyles.divider} />
			<View style={dominoStyles.half}>
				<Text>
					{domino.right}
				</Text>
			</View>
		</View>
	);
}
