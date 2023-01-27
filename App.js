import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Provider } from 'react-redux';
import { Store } from './Src/Store';


const App = () => {

  return (
    <Provider store={Store}>
      <SafeAreaView style={Styles.Page}>
          <StatusBar hidden={true} />
          <Text>Hello World!</Text>
      </SafeAreaView>
    </Provider>
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1
  }
});

export default App;
