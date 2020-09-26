import { check } from "prettier";
import React from "react";
import { View, StatusBar, ScrollView, SafeAreaView, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import RoundedCheckbox from "./lib/RoundedCheckbox";

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);

  const renderIconCheckbox = (
    checkedColor: string,
    uncheckedColor: string,
    isChecked: boolean,
    onPress: Function,
  ) => (
    <View style={{ marginLeft: 10 }}>
      <RoundedCheckbox
        text="L"
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        component={
          <Icon
            size={16}
            name="check"
            type="Entypo"
            color={isChecked ? "#fdfdfd" : "transparent"}
          />
        }
        onPress={onPress}
      />
    </View>
  );

  const renderSizeCheckboxes = () => (
    <View>
      <Text style={{ marginLeft: 8, marginBottom: 16, color: "#9e9ca9" }}>
        What is your clothing size?
      </Text>
      <View
        style={{
          right: 8,
          width: "80%",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        <RoundedCheckbox text="S" onPress={() => {}} />
        <RoundedCheckbox text="M" onPress={() => {}} />
        <RoundedCheckbox text="L" onPress={() => {}} />
        <RoundedCheckbox text="XL" onPress={() => {}} />
        <RoundedCheckbox text="XXL" onPress={() => {}} />
      </View>
    </View>
  );

  const renderColorCheckboxes = () => (
    <View>
      <Text
        style={{
          marginLeft: 8,
          marginTop: 32,
          marginBottom: 16,
          color: "#9e9ca9",
        }}
      >
        My preferred shoe colors
      </Text>
      <View
        style={{
          right: 8,
          flexDirection: "row",
        }}
      >
        {renderIconCheckbox("#000", "#000", checked, () => setChecked(false))}
        {renderIconCheckbox("#db0344", "#db0344", checked2, () =>
          setChecked2(!checked2),
        )}
        {renderIconCheckbox("#08b5ca", "#08b5ca", checked3, () =>
          setChecked3(!checked3),
        )}
        {renderIconCheckbox("#33F81C", "#33F81C", checked4, () =>
          setChecked4(!checked4),
        )}
        {renderIconCheckbox("#DADF13", "#DADF13", checked5, () =>
          setChecked5(!checked5),
        )}
        {renderIconCheckbox("#FFA417", "#FFA417", checked6, () =>
          setChecked6(!checked6),
        )}
      </View>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 32,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {renderSizeCheckboxes()}
        {renderColorCheckboxes()}
      </SafeAreaView>
    </>
  );
};

export default App;
