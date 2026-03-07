import { View, Text } from "react-native";
import { styles } from "../theme/styles";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Settings
      </Text>
    </View>
  );
}
