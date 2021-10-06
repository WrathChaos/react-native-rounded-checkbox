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
} from "./PureRoundedCheckbox.style";

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

interface IState {
  checked: boolean;
}

export default class PureRoundedCheckbox extends React.PureComponent<
  IRoundedCheckboxProps,
  IState
> {
  constructor(props: IRoundedCheckboxProps) {
    super(props);
    this.state = {
      checked: props.isChecked || false,
    };
  }

  handlePress = () => {
    if (typeof this.props.active === "boolean")
      this.props.onPress && this.props.onPress(this.props.active);
    else
      this.setState(
        { checked: !this.state.checked },
        () => this.props.onPress && this.props.onPress(this.state.checked),
      );
  };

  render() {
    const {
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
    } = this.props;
    const { checked } = this.state;

    const isActive = active || checked;
    const backgroundColor = isActive ? checkedColor : uncheckedColor;
    const textColor = isActive ? checkedTextColor : uncheckedTextColor;
    return (
      <RNBounceable
        {...rest}
        style={[
          styles.outerContainer,
          outerStyle,
          _outerBorderWithStyle(isActive ? 1 : 0),
        ]}
        onPress={this.handlePress}
      >
        <View
          style={[
            styles.innerContainer,
            innerStyle,
            _innerBorderWidthStyle(backgroundColor),
          ]}
        >
          {children || (
            <Text
              style={[styles.textStyle, textStyle, _textColorStyle(textColor)]}
            >
              {text}
            </Text>
          )}
        </View>
      </RNBounceable>
    );
  }
}
