import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { withNavigationFocus } from "react-navigation";

function CamDetect({ navigation }) {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  async function takePicture() {
    try {
      const options = {
        quality: 0.5,
        base64: true,
        forceUpOrientation: true,
        fixOrientation: true
      };
      const data = await cameraRef.current.takePictureAsync(options);

      const [, , suffix] = data.uri.split(".");
      const ext = suffix.toLowerCase() === "heic" ? "jpg" : suffix;

      const file = {
        uri: data.uri,
        type: "image/jpeg",
        name: `${Math.random()
          .toString(36)
          .substring(7)}.${ext}`
      };

      navigation.navigate("Loading", { file });
    } catch (err) {
      console.log(err);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              width: "100%"
            }}
            onPress={takePicture}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                color: "white",
                alignSelf: "center"
              }}
            >
              Press here
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default withNavigationFocus(CamDetect);
