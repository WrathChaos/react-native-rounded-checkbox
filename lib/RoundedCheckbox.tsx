import * as React from "react";
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
  active?: boolean;
  textStyle?: any;
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
    if (this.props.active === true || this.props.active === false)
      this.props.onPress && this.props.onPress(this.props.active);
    else
      this.setState(
        { checked: !this.state.checked },
        () => this.props.onPress && this.props.onPress(this.state.checked),
      );
  };

  render() {
    const _checked = this.props.active ? this.props.active : this.state.checked;
    const {
      component,
      textStyle,
      text = "L",
      outerSize = 50,
      innerSize = 40,
      checkedColor = "#0bc8a5",
      outerBorderColor = "#eee",
      uncheckedColor = "#f0f0f0",
      checkedTextColor = "#fdfdfd",
      uncheckedTextColor = "#5c5969",
    } = this.props;

    const backgroundColor = _checked ? checkedColor : uncheckedColor;
    const textColor = _checked ? checkedTextColor : uncheckedTextColor;
    const _outerBorderWidth = _checked ? 1 : 0;

    return (
      <RNBounceable
        {...this.props}
        style={_outerContainer(outerSize, outerBorderColor, _outerBorderWidth)}
        onPress={this.handleOnPress}
      >
        <View style={_innerContainer(innerSize, backgroundColor)}>
          {component || (
            <Text style={[_textStyle(textColor), textStyle]}>{text}</Text>
          )}
        </View>
      </RNBounceable>
    );
  }
}
