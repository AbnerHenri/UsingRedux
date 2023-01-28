import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { Store } from './Src/Store';

import StackNavigator from './Src/Navigators/StackNavigator';

const App = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <SafeAreaView style={Styles.Page}>
            <StatusBar hidden={true} />
            <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1
  }
});

export default App;
