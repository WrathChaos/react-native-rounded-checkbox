import React from "react";
import { Text, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import {
  _textStyle,
  _innerContainer,
  _outerContainer,
} from "./RoundedCheckbox.style";

interface IRoundedCheckboxProps {
  text?: string;
  outerSize?: number;
  innerSize?: number;
  isChecked?: boolean;
  checkedColor?: string;
  uncheckedColor?: string;
  outerBorderColor?: string;
  checkedTextColor?: string;
  component?: React.ReactNode;
  uncheckedTextColor?: string;
  onPress: (checked: boolean) => void;
}

const RoundedCheckbox = (props: IRoundedCheckboxProps) => {
  const {
    component,
    text = "L",
    outerSize = 50,
    innerSize = 40,
    isChecked = false,
    checkedColor = "#0bc8a5",
    outerBorderColor = "#eee",
    uncheckedColor = "#F0F0F0",
    checkedTextColor = "#fdfdfd",
    uncheckedTextColor = "#5c5969",
    onPress,
  } = props;

  const [checked, setChecked] = React.useState(isChecked);
  const backgroundColor = checked ? checkedColor : uncheckedColor;
  const textColor = checked ? checkedTextColor : uncheckedTextColor;

  const handleOnPress = () => {
    setChecked(!checked);
  };

  React.useEffect(() => {
    onPress && onPress(checked);
  }, [checked]); // ? Only re-run the effect if `checked` variable changes

  return (
    <RNBounceable
      {...props}
      style={_outerContainer(outerSize, outerBorderColor)}
      onPress={handleOnPress}
    >
      <View style={_innerContainer(innerSize, backgroundColor)}>
        {component || <Text style={_textStyle(textColor)}>{text}</Text>}
      </View>
    </RNBounceable>
  );
};

export default RoundedCheckbox;
