import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../styles/colors";

type Color = "primary" | "primaryDark";

interface RecProps {
  color: Color;
  top: Number;
}

export default function HeaderRectangle<RecProps>(props) {
  const backgroundColor = Colors.header[props.color];
  const borderTopColor = Colors.header[props.color];
  const top = props.top || 0;
  return (
    <View style={[styles.container, { top }]}>
      <View style={[styles.recBase, { backgroundColor }]} />
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor }]} />
        <View style={[styles.triangleCorner, { borderTopColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0
  },
  row: {
    flexDirection: "row"
  },
  recBase: {
    flex: 1,
    height: 64
  },
  square: {
    width: 111,
    height: 64
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 64,
    borderTopWidth: 64,
    borderRightColor: "transparent"
  }
});
