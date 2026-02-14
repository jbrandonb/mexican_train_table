import { Text, View, Pressable, StyleSheet } from "react-native";

export default function TabIndex() {
  return (
    //Home Header
    <View style={{
      flex: 1,
      alignItems: "center"
    }}>
      <Text style={styles.header}>
        Welcome to MexTrain Table!
      </Text>

      <View style={styles.container}>
        <Pressable style={styles.button}>

        </Pressable>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

