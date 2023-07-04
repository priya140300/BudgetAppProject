import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyButton2 = ({ listData }) => {
  const navigation = useNavigation();


  const handleShowItems = () => {
    navigation.navigate('SavedValuesScreen');
  };


  return (
    <TouchableOpacity style={styles.button} onPress={handleShowItems}>
      <Text style={styles.buttonText}>Show Items</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
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

export default MyButton2;

