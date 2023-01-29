import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { Store, Persistor } from './Src/Store';
import { PersistGate } from 'redux-persist/es/integration/react';

import StackNavigator from './Src/Navigators/StackNavigator';

const App = () => {

  return (
    <Provider store={Store}>
      <PersistGate loading={'null'} persistor={Persistor}>
        <NavigationContainer>
          <SafeAreaView style={Styles.Page}>
              <StatusBar hidden={true} />
              <StackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1
  }
});

export default App;
