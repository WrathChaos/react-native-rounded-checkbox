import { ViewStyle, TextStyle } from "react-native";

export const _outerContainer = (
  outerSize: number,
  outerBorderRadius: number,
  outerBorderColor: string,
  _outerBorderWidth: number,
): ViewStyle => ({
  width: outerSize,
  height: outerSize,
  borderColor: outerBorderColor,
  borderWidth: _outerBorderWidth,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: outerBorderRadius,
});

export const _innerContainer = (
  innerSize: number,
  innerBorderRadius: number,
  backgroundColor: string,
): ViewStyle => ({
  width: innerSize,
  height: innerSize,
  backgroundColor,
  borderRadius: innerBorderRadius,
  alignItems: "center",
  justifyContent: "center",
});

export const _textStyle = (textColor: string): TextStyle => ({
  fontSize: 12,
  color: textColor,
  fontWeight: "bold",
});
