import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();
  function goToConfirmation() {
    navigation.navigate("Confirmation");
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputChange(value: string) {
    console.log(value);
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? "😄" : "😀"}</Text>
                <Text style={styles.title}>
                  Como podemos {"\n"} chamar voce ?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button text="Confirmar" onPress={goToConfirmation} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
