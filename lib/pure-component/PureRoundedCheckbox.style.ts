import { ViewStyle, TextStyle, StyleSheet } from "react-native";

export const _outerBorderWithStyle = (borderWidth: number): ViewStyle => ({
  borderWidth: borderWidth,
});

export const _innerBorderWidthStyle = (backgroundColor: string): ViewStyle => ({
  backgroundColor: backgroundColor,
});

export const _textColorStyle = (color: string): TextStyle => ({
  color: color,
});

interface Style {
  outerContainer: ViewStyle;
  innerContainer: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  outerContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
