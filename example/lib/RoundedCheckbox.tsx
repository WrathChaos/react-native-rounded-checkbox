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

export interface IRoundedCheckboxProps {
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

interface IState {
  checked: boolean;
}

export default class RoundedCheckbox extends React.PureComponent<
  IRoundedCheckboxProps,
  IState
> {
  constructor(props: IRoundedCheckboxProps) {
    super(props);
    this.state = {
      checked: props.isChecked || false,
    };
  }

  handleOnPress = () => {
    this.setState(
      { checked: !this.state.checked },
      () => this.props.onPress && this.props.onPress(this.state.checked),
    );
  };

  render() {
    const { checked } = this.state;
    const {
      component,
      text = "L",
      outerSize = 50,
      innerSize = 40,
      checkedColor = "#0bc8a5",
      outerBorderColor = "#eee",
      uncheckedColor = "#F0F0F0",
      checkedTextColor = "#fdfdfd",
      uncheckedTextColor = "#5c5969",
    } = this.props;

    const backgroundColor = checked ? checkedColor : uncheckedColor;
    const textColor = checked ? checkedTextColor : uncheckedTextColor;
    return (
      <RNBounceable
        {...this.props}
        style={_outerContainer(outerSize, outerBorderColor)}
        onPress={this.handleOnPress}
      >
        <View style={_innerContainer(innerSize, backgroundColor)}>
          {component || <Text style={_textStyle(textColor)}>{text}</Text>}
        </View>
      </RNBounceable>
    );
  }
}
