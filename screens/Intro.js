import { StyleSheet, Text, View } from "react-native";
import React from "react";

const meanings = [
  { id: 1, meaning: "안녕하세요! \n나만의 단어를 저장하고 공부해 보세요" },
  { id: 2, meaning: "업데이트 내역" },
];

const Intro = () => {
  return (
    <View style={styles.card}>
      <Text>{meanings[0].meaning}</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  card: {
    margin: 6,
    padding: 15,
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
  },
});
