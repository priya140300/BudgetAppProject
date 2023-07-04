import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

const Myinput1 = ({ setListData }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputPlanned, setInputPlanned] = useState('');
  const [inputActual, setInputActual] = useState('');

  const addItemToList = () => {
    setListData((prevListData) => [
      ...prevListData,
      { inputValue, inputPlanned, inputActual },
    ]);
    setInputValue('');
    setInputPlanned('');
    setInputActual('');
  };

  return (
    <View>
      <TextInput
        style={{ fontSize: 30 }}
        placeholder="Enter the name of item"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <TextInput
        style={{ fontSize: 30 }}
        placeholder="Enter planned amount"
        value={inputPlanned}
        onChangeText={(text) => setInputPlanned(text)}
      />
      <TextInput
        style={{ fontSize: 30 }}
        placeholder="Enter actual amount"
        value={inputActual}
        onChangeText={(text) => setInputActual(text)}
      />

      <Button title="SAVE" onPress={addItemToList} />
    </View>
  );
};

export default Myinput1;





