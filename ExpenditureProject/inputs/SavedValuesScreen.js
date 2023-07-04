import React from 'react';
import { View, Text, FlatList } from 'react-native';

const SavedValuesScreen = ({ navigation, route }) => {
  const { savedValues } = route.params;

  return (
    <View> 
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Saved Values:</Text>
      {savedValues && savedValues.length > 0 ? (
        <FlatList
          data={savedValues}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 5 }}>
              <Text>Name: {item.inputValue}</Text>
              <Text>Planned Amount: {item.inputPlanned}</Text>
              <Text>Actual Amount: {item.inputActual}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No saved values found</Text>
      )}
    </View>
  );
};

export default SavedValuesScreen;

