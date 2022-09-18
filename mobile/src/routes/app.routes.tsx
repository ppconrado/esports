import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Game } from "../screens/Game";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }} // retira o cabecalho de todas as rotas
    >
      <Screen name="home" component={Home} />

      <Screen name="game" component={Game} />
    </Navigator>
  );
}
