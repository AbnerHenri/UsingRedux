import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function About(props) {

  const Navi = useNavigation()

  function comeBack() {
    Navi.navigate('Register')
  }

  return(
    <View style={Styles.Page}>
        <Text style={Styles.Title}>Seus Dados</Text>

        <View style={Styles.Card}>
          <Text style={Styles.Data}>Seu nome : &nbsp;&nbsp;
            <Text style={Styles.State}>{props.name.trim()}</Text>
          </Text>

          <Text style={Styles.Data}>Seu e-mail : &nbsp;&nbsp;
            <Text style={Styles.State}>{props.email}</Text>
          </Text>

          <Text style={Styles.Data}>Seu telefone : &nbsp;&nbsp;
            <Text style={Styles.State}>{props.tel}</Text>
          </Text>
        </View>

        <TouchableOpacity style={Styles.Button} onPress={()=> comeBack()}>
          <Text style={Styles.TextButton}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
   Page : {
    flex : 1,

    justifyContent : 'center',
    alignItems : 'center'
   },

  Button: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#2D355B',
    borderRadius: 8,

    width: '70%',
    padding: 15,
    
    position: 'absolute',
    bottom: 50,
  },

  Title: {
    fontSize: 22,
    color: '#2D355B',
    
    position: 'absolute',
    top: 80
  },

  TextButton: {
    fontSize: 16,
    color: '#FED500',
    fontWeight: '700',
  },

  Card : {
    width : '80%',
    height : 180,

    backgroundColor: '#2D355B',
    borderRadius : 12,

    justifyContent: 'center',
    paddingLeft : 15,
  },

  Data : {
    color : '#DDD',

    fontSize : 16,
    margin : 8
  },

  State : {
    color: '#FED500',
  }
})

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    email: state.userReducer.email,
    tel: state.userReducer.tel
  };
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);