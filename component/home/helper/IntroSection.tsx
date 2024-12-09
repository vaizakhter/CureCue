import { View, Text } from "react-native";
import React from "react";

const IntroSection = () => {
  const name = "Vaiz";
  return (
    <View
      style={{
        marginTop: 22,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View>
        <Text style={{ fontSize: 13, color: "gray" }}>Hello,</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>
          Hi {name || "Guests"}
        </Text>
      </View>
      <View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "lightblue",
            borderRadius: 40,
          }}
        />
      </View>
    </View>
  );
};

export default IntroSection;
