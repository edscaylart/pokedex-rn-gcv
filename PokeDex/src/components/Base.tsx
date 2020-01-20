import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../styles/colors";

export default function Base({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.borderScreen,
    left: 31,
    right: 31,
    width: 330,
    height: 514,
    padding: 24,
    borderRadius: 10,
    flex: 1
  }
});
