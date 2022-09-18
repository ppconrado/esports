import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

///////////////////////////// REACT NATIVE CONCEPT/////////////////////////

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// interface ButtonProps {
//   title: string;
// }

// function Button(props: ButtonProps) {
//   return (
//     <TouchableOpacity>
//       <Text>{props.title}</Text>
//     </TouchableOpacity>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button title="Send 1" />
//       <Button title="Send 2" />
//       <Button title="Send 3" />
//       <Button title="Hello World" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
