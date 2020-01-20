import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../styles/colors";

export default function BottomButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.rowLights}>
        <View style={styles.redLight} />
        <View style={styles.blueLight} />
      </View>
      <View style={styles.rowControl}>
        <View style={styles.circle} />
        <View style={styles.middleRec} />
        <View style={styles.control}>
          <View style={styles.updown} />
          <View style={styles.leftright} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    height: 170,
    paddingTop: 15,
    paddingHorizontal: 30
  },
  rowLights: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: 120
  },
  redLight: {
    width: 43,
    height: 6,
    backgroundColor: Colors.header.primaryDark
  },
  blueLight: {
    width: 43,
    height: 6,
    backgroundColor: Colors.header.bigBallBlue
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: Colors.circleBottom
  },
  rowControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  middleRec: {
    backgroundColor: Colors.middleRec,
    width: 96,
    height: 45,
    borderRadius: 10,
    marginTop: 60
  },
  control: {
    justifyContent: "center",
    alignSelf: "center"
  },
  updown: {
    position: "absolute",
    height: 96,
    width: 38,
    backgroundColor: "#000",
    alignSelf: "center"
  },
  leftright: {
    width: 96,
    height: 38,
    backgroundColor: "#000"
  }
});
