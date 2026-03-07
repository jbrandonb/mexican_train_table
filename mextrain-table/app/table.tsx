import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { styles } from "../theme/styles";

export default function TableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Table Lobby
      </Text>
      <Text style={styles.text}>
        View for table screen
      </Text>

      <Pressable
        onPress={() => router.back()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}>
        <Text style={styles.buttonText}>
          Back
        </Text>
      </Pressable>
    </View>
  );
}
