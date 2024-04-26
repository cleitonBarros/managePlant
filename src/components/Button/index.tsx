import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
});
