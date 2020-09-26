import { ViewStyle, TextStyle } from "react-native";

export const _outerContainer = (
  outerSize: number,
  outerBorderColor: string,
): ViewStyle => ({
  width: outerSize,
  height: outerSize,
  borderColor: outerBorderColor,
  borderWidth: 1,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: outerSize / 2,
});

export const _innerContainer = (
  innerSize: number,
  backgroundColor: string,
): ViewStyle => ({
  width: innerSize,
  height: innerSize,
  backgroundColor,
  borderRadius: innerSize / 2,
  alignItems: "center",
  justifyContent: "center",
});

export const _textStyle = (textColor: string): TextStyle => ({
  color: textColor,
  fontWeight: "bold",
});
