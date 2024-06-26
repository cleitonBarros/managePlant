import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import colors from "../../theme/colors";
import wateringImg from "../../assets/watering.png";
import { MaterialIcons } from "@expo/vector-icons";
import fonts from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();
  function goToUser() {
    navigation.navigate("UserIdentification");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{"\n"} suas plantas de {"\n"} forma facil
        </Text>
        <Image source={wateringImg} style={styles.image} />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar sua plantas Nós cuidamos de lembrar-lo
          sempre que precisar
        </Text>

        <TouchableOpacity style={styles.button} onPress={goToUser}>
          <Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 38,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
});
