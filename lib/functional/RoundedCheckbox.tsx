import * as React from "react";
import {
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  TextComponent,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _textColorStyle,
  _innerBorderWidthStyle,
  _outerBorderWithStyle,
} from "./RoundedCheckbox.style";
import useStateWithCallback from "../helpers/useStateWithCallback";

type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IRoundedCheckboxProps {
  text?: string;
  active?: boolean;
  isChecked?: boolean;
  checkedColor?: string;
  uncheckedColor?: string;
  checkedTextColor?: string;
  children?: React.ReactNode;
  uncheckedTextColor?: string;
  textStyle?: CustomTextStyleProp;
  outerStyle?: CustomViewStyleProp;
  innerStyle?: CustomViewStyleProp;
  onPress?: (checked: boolean) => void;
}

const RoundedCheckbox: React.FC<IRoundedCheckboxProps> = ({
  active,
  isChecked,
  children,
  text = "L",
  textStyle,
  outerStyle,
  innerStyle,
  checkedColor = "#0bc8a5",
  uncheckedColor = "#f0f0f0",
  checkedTextColor = "#fdfdfd",
  uncheckedTextColor = "#5c5969",
  onPress,
  ...rest
}) => {
  const [checked, setChecked] = useStateWithCallback(isChecked || false);

  const isActive = active || checked;
  const backgroundColor = isActive ? checkedColor : uncheckedColor;
  const textColor = isActive ? checkedTextColor : uncheckedTextColor;

  const handlePress = () => {
    if (typeof active === "boolean") onPress && onPress(active);
    else
      setChecked(!checked, (updatedChecked: boolean) => {
        onPress && onPress(updatedChecked);
      });
  };

  const InnerComponent = () => (
    <Text style={[styles.textStyle, textStyle, _textColorStyle(textColor)]}>
      {text}
    </Text>
  );

  return (
    <RNBounceable
      {...rest}
      style={[
        styles.outerContainer,
        outerStyle,
        _outerBorderWithStyle(isActive ? 1 : 0),
      ]}
      onPress={handlePress}
    >
      <View
        style={[
          styles.innerContainer,
          innerStyle,
          _innerBorderWidthStyle(backgroundColor),
        ]}
      >
        {children || <InnerComponent />}
      </View>
    </RNBounceable>
  );
};

export default RoundedCheckbox;
