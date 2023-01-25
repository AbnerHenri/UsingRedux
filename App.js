import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={Styles.Page}>
      <StatusBar hidden={true} />
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Page : {
    flex : 1
  }
});

export default App;
