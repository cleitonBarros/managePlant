import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Welcome } from "../screens/welcome";
import { UserIdentification } from "../screens/user-identification";
import { Confirmation } from "../screens/confimation";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="UserIdentification" component={UserIdentification} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </NavigationContainer>
  );
}
