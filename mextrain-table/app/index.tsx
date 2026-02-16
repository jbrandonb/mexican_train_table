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
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Start Game
          </Text>
        </Pressable>
      </View>

    </View>

  );
}


