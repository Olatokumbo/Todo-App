import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

export default GoalInput = ({ addGoal, visibility, cancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    addGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.controls}>
        <TextInput
          placeholder="Course Goal"
          style={styles.enterGoals}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actions}>
          <View style={styles.buttons}>
            <Button title="Cancel" color="red" onPress={cancel} />
          </View>
          <View style={styles.buttons}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  controls: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  enterGoals: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    width: "80%",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  buttons: {
      width: "40%"
  }
});
