import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Detail = ({ navigation }) => {
  return (
    <View>
      <View style={styles.button}>
        <Button
          title="목록으로"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.container}>
        <Text>안녕하세요!</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
  button: {
    margin: 6,
    alignContent: "right",
    width: "20%",
  },
});
