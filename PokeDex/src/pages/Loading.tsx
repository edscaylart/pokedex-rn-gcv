import React, { useCallback, useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";

import api from "../services/api";

export default function Loading({ navigation }) {
  const sendPhoto = useCallback(async () => {
    try {
      const file = navigation.getParam("file");
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("detect", formData);

      const pokemon = response.data;

      navigation.replace("PokeInfo", { pokemon });
    } catch (err) {
      navigation.goBack();
    }
  }, []);

  useEffect(() => {
    sendPhoto();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#161a27",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator size="large" color="#fff" />
      <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
        Analysing image, it may take a few seconds
      </Text>
    </View>
  );
}
