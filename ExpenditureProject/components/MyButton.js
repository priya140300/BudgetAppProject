import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>SAVE</Text>


    </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyButton;
