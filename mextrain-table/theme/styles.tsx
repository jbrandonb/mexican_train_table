import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		fontSize: 24,
		marginTop: 20,
		marginBottom: 20,
	},
	button: {
		backgroundColor: "orange",
		padding: 12,
		margin: 10,
		borderRadius: 8,
	},
	buttonText: {
		fontSize: 30,
		color: "black",
		fontWeight: "bold",
	},
	buttonPressed: {
		backgroundColor: "darkorange",
		transform: [{ scale: 0.95 }],
	}
});

