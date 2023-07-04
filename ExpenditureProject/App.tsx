import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SavedValuesScreen from './inputs/SavedValuesScreen';
import { Text, View } from 'react-native';
import Myinput1 from './inputs/Myinput1';
import MyButton2 from './components/MyButton2';

const Stack = createStackNavigator();

const App = () => {
  const [listData, setListData] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SavedValuesScreen"
          component={SavedValuesScreen}
          options={{ title: 'Saved Values' }}
          initialParams={{ savedValues: listData }}
        />

      </Stack.Navigator>

      <View>
        <Text style={{ fontSize: 60, color: 'grey', backgroundColor: 'black' }}>Budget Entry</Text>
        <Myinput1 setListData={setListData} />
        <MyButton2 listData={listData} />
      </View>
    </NavigationContainer>
  );
};

export default App;

