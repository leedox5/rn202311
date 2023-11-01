import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.word}>
          <Text>단어</Text>
        </View>
        <View style={styles.meaning}>
          <Text>의미</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.word}
          onPress={() => {
            navigation.navigate("Detail");
          }}
        >
          <View>
            <Text>able</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.meaning}>
          <Text>할수있는</Text>
        </View>
      </View>
      <View>
        <Button
          title="go detail"
          onPress={() => navigation.navigate("Detail")}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
