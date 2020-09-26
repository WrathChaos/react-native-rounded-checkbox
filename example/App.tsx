import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import RoundedCheckbox from "./lib/RoundedCheckbox";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <RoundedCheckbox
          text="L"
          onPress={(checked) => console.log("Checked: ", checked)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
