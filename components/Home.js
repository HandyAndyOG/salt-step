import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../state-management/AppContext";
import { Pedometer } from "expo-sensors";

const Home = () => {
  const { stepCount, setStepCount } = useContext(AppContext);
  useEffect(() => {
    let listener;

    Pedometer.isAvailableAsync()
      .then((result) => {
        if (result) {
          Pedometer.watchStepCount((data) => {
            setStepCount(data.steps)
          })
            .then((listener) => {
              console.log(listener, "inside promise");
            })
            .catch((error) => console.log(error));
        } else {
          console.log("Error: unable to initialize step count");
        }
      })
      .catch((err) => console.log(err));

    return () => {
      if (listener) {
        console.log(listener)
        listener.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Steps: {stepCount}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
