import { Text, View, Pressable } from "react-native";
import { styles } from "../theme/styles"

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
        <Pressable
          onPressIn={() => console.log("IN")}
          onPressOut={() => console.log("OUT")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}>
          <Text style={styles.buttonText}>
            Start Game
          </Text>
        </Pressable>
        <Pressable style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}>
          <Text style={styles.buttonText}>
            Settings
          </Text>
        </Pressable>

      </View>

    </View>

  );
}


