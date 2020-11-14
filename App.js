import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Button
} from "react-native";
import ListItem from "./components/ListItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode ] = useState(false);
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setAddMode(false)
    // console.log(courseGoals);
  };
  const cancelGoalAddition = () =>{
     setAddMode(false);
  }

  const deleteGoalHandler = (id) =>{
    const filteredGoals = courseGoals.filter((goal)=>goal.id!==id);
    setCourseGoals(filteredGoals);
    // console.log("Filtered", id, filteredGoals)
  } 
  return (
    <View style={styles.root}>
    <Button title="Add New Goal" onPress={()=>setAddMode(true)}/>
    <GoalInput addGoal={addGoalHandler} visibility={addMode} cancel={cancelGoalAddition}/>
      <FlatList
      keyExtractor={(item, key)=>item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <ListItem value={itemData.item.value} id={itemData.item.id} deleteItem={deleteGoalHandler}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    padding: 60
  }
})