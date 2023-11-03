import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Cell,
  Row,
  Rows,
  Table,
  TableWrapper,
} from "react-native-reanimated-table";

const words = {
  header: ["단어", "의미", "메모"],
  rows: [
    ["able", "할수있는", 1],
    ["abroad", "해외로", 1],
  ],
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Table
        borderStyle={{
          borderWidth: 1,
          borderColor: "#c8e1ff",
        }}
      >
        <Row
          data={words.header}
          flexArr={[2, 3, 1]}
          style={styles.head}
          textStyle={styles.headText}
        ></Row>
        <Rows
          data={words.rows}
          flexArr={[2, 3, 1]}
          style={styles.row}
          textStyle={styles.text}
        ></Rows>
      </Table>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },

  head: {
    height: 30,
    backgroundColor: "#f1f8ff",
  },

  headText: {
    fontSize: 15,
    textAlign: "center",
  },

  row: {
    height: 30,
  },

  row1: {
    flexDirection: "row",
    height: 30,
  },

  text: {
    padding: 4,
  },

  word: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  meaning: {
    flex: 2,
    margin: 5,
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
});
