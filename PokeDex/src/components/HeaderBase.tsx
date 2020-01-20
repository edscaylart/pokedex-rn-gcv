import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../styles/colors";

import HeaderRectangle from "./HeaderRectangle";

export default function HeaderBase() {
  return (
    <View>
      <HeaderRectangle color="primaryDark" top={10} />
      <HeaderRectangle color="primary" />
      <View style={styles.circle}>
        <View style={styles.innerCircle}>
          <View style={styles.bright} />
        </View>
      </View>
      <View style={styles.circleRow}>
        <View
          style={[styles.smCircle, { backgroundColor: Colors.header.ballRed }]}
        />
        <View
          style={[
            styles.smCircle,
            { backgroundColor: Colors.header.ballYellow }
          ]}
        />
        <View
          style={[
            styles.smCircle,
            { backgroundColor: Colors.header.ballGreen }
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    top: 46,
    left: 26,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: Colors.header.bigBallGray,
    justifyContent: "center",
    alignItems: "center"
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: Colors.header.bigBallBlue
  },
  bright: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    backgroundColor: Colors.header.ballBlue,
    top: 15,
    left: 15
  },
  circleRow: {
    flexDirection: "row",
    position: "absolute",
    top: 37,
    left: 113
  },
  smCircle: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    marginRight: 6
  }
});
