import { Text, View, Pressable } from "react-native";

export default function TabIndex() {
  return (
    //Home Header
    <View style={{
      flex: 1,
      alignItems: "center"
    }}
    >
      <Text style={{
        fontSize: 28,
        fontWeight: "700",
        marginTop: 24
      }}>
        Welcome to MexTrain Table!
      </Text>
    </View>
  );
}

