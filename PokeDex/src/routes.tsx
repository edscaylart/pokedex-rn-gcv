import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CamDetect from "./pages/CamDetect";
import Loading from "./pages/Loading";
import PokeInfo from "./pages/PokeInfo";

const Routes = createAppContainer(
  createStackNavigator(
    {
      CamDetect,
      Loading,
      PokeInfo
    },
    {
      initialRouteName: "CamDetect",
      defaultNavigationOptions: {
        headerShown: false
      }
    }
  )
);

export default Routes;
