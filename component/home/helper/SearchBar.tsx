import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import DefaultTextInput from "@/component/common/textInput";
import { screenwidth } from "@/constrains/screenDimentions";
import { primarycolor } from "@/constrains/theme";

const SearchBar = () => {
  const ref = React.useRef<any>(null);

  const handleSearch = () => {
    console.log(ref.current.getText());
  };

  return (
    <View>
      <DefaultTextInput placeholder="Search Doctor or Health Issue" ref={ref} onSubmit={handleSearch} textInputStyle={styles.textInput} containerStyle={styles.textInputContainer} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
   textInput: {
    borderWidth: 0.5,
    borderColor: primarycolor,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    width: '100%'
   },
   textInputContainer: {
    width: screenwidth - 20,
    alignItems: "center",
   }
});
