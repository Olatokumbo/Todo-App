import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default ListItem = ({ value, deleteItem, id }) => {
  return (
    <TouchableOpacity onPress={deleteItem.bind(this, id)} activeOpacity={0.8}>
      <View>
        <Text style={styles.listItem}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 6,
  },
});
