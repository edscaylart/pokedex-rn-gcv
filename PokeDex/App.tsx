import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeaderBase from "./src/components/HeaderBase";
import Base from "./src/components/Base";
import BottomButtons from "./src/components/BottomButtons";
import Routes from "./src/routes";

import Colors from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderBase />
      <View style={styles.headerFix} />
      <Base>
        <View style={styles.row}>
          <View style={styles.smallLight} />
          <View style={styles.smallLight} />
        </View>
        <Routes />
        <View style={styles.bottomSmallLight} />
      </Base>
      <BottomButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  headerFix: {
    height: 166
  },
  row: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    top: 7,
    width: 50
  },
  smallLight: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
    backgroundColor: Colors.borderBallRed
  },
  bottomSmallLight: {
    position: "absolute",
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    backgroundColor: Colors.borderBallRed,
    left: 28,
    bottom: 8
  }
});
