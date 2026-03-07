import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";
import { styles } from "../theme/styles"

export default function TabIndex() {
  return (
    //Home Header
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome to MexTrain Table!
      </Text>

      <View style={styles.container}>
        <Pressable
          onPress={() => router.push("/table")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}>
          <Text style={styles.buttonText}>
            Start Game
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/settings")}
          style={({ pressed }) => [
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


