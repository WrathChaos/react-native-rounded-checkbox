<img alt="React Native Rounded Checkbox" src="assets/logo.png" width="1050"/>

[![Rounded Checkbox with animated and fully customizable options library for React Native](https://img.shields.io/badge/-Rounded%20Checkbox%20with%20animated%20and%20fully%20customizable%20options%20library%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-rounded-checkbox)

[![npm version](https://img.shields.io/npm/v/react-native-rounded-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-rounded-checkbox)
[![npm](https://img.shields.io/npm/dt/react-native-rounded-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-rounded-checkbox)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Rounded Checkbox"
        src="assets/Screenshots/RN-Rounded-Checkbox.gif" />
  <img alt="React Native Rounded Checkbox"
        src="assets/Screenshots/RN-Rounded-Checkbox.png" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-rounded-checkbox
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.1.1"
```

# Usage

## Import

```jsx
import {
  RoundedCheckbox,
  PureRoundedCheckbox,
} from "react-native-rounded-checkbox";
```

## Fundamental Usage

```jsx
<RoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} />
```

## PureComponent Usage

```jsx
<PureRoundedCheckbox onPress={(checked) => console.log("Checked: ", checked)} />
```

# Configuration - Props

| Property           |   Type    |  Default  | Description                                                                                             |
| ------------------ | :-------: | :-------: | ------------------------------------------------------------------------------------------------------- |
| onPress            | function  | undefined | set your own onPress functionality                                                                      |
| active             |  boolean  | undefined | disables the built-in check system and it let's to control check system                                 |
| children           | component |   Text    | change the default Text component with any component like `Icon` from react-native-dynamic-vector-icons |
| text               |  string   |    "L"    | change the default text value                                                                           |
| isChecked          |  boolean  |   false   | set the initial checked state                                                                           |
| checkedColor       |   color   |  #0bc8a5  | change the background color when checked state is true                                                  |
| uncheckedColor     |   color   |  #f0f0f0  | change the background color when checked state is false                                                 |
| checkedTextColor   |   color   |  #fdfdfd  | change the text color when checked state is true                                                        |
| uncheckedTextColor |   color   |  #5c5969  | change the text color when checked state is false                                                       |
| textStyle          |   style   |  default  | set your own `text` style instead of default one                                                        |
| outerStyle         |   style   |  default  | set your own `outer` style instead of default one                                                       |
| innerStyle         |   style   |  default  | set your own `inner` style instead of default one                                                       |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Heavily inspired by [William Candillon's Youtube Series](https://www.youtube.com/watch?v=2hveuwFtVZ0)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Rounded Checkbox is available under the MIT license. See the LICENSE file for more info.
