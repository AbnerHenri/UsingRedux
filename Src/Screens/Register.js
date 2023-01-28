import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function Register(props) {

  const Navi = useNavigation()

  function nextPage() {
    Navi.navigate('About')
  } 

  return(
    <View style={Styles.Page}>
        <Text style={Styles.Title}>Digite os teus dados</Text>

        <TextInput 
          placeholder='Digite seu nome' 
          style={Styles.Input}
          returnKeyType={'next'}
          onSubmitEditing={() => { this.secondTextInput.focus(); }}
          value={props.name}
          onChangeText={(e)=> props.setName(e)}
        />

        <TextInput 
          placeholder='Digite seu e-mail' 
          style={Styles.Input}
          returnKeyType={'next'}
          ref={(input) => { this.secondTextInput = input; }}
          onSubmitEditing={() => { this.thirdTextInput.focus(); }}
          value={props.email}
          onChangeText={(e)=> props.setEmail(e)}
        />

        <TextInput 
          placeholder='Digite seu telefone' 
          style={Styles.Input} 
          keyboardType={'numeric'}
          ref={(input) => { this.thirdTextInput = input; }}
          value={props.tel}
          onChangeText={(e)=> props.setTel(e)}
        />

        <TouchableOpacity style={Styles.Button} onPress={()=> nextPage()}>
          <Text style={Styles.TextButton}>Próximo</Text>
        </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  Page : {
    flex : 1,

    justifyContent : 'center',
    alignItems : 'center'
  },

  Title : {
    fontSize : 22,
    color: '#2D355B',
    
    position : 'absolute',
    top : 80
  },

  Input : {
    width : '70%',

    padding : 12,
    margin : 5,


    borderWidth : 1,
    borderColor: '#2D355B',
    borderRadius : 8,
  },

  Button : {
    justifyContent : 'center',
    alignItems : 'center',

    backgroundColor: '#2D355B',
    borderRadius : 8,

    width : '70%',
    padding : 15,
    
    position : 'absolute',
    bottom : 50,
  },

  TextButton : {
    fontSize : 16,
    color: '#FED500',
    fontWeight : '700',
  }
})

const mapStateToProps = (state) => {
  return { 
    name : state.userReducer.name,
    email: state.userReducer.email,
    tel: state.userReducer.tel
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName : (name) => dispatch({ type : 'SET_NAME', payload : {name : name} }),
    setEmail : (email) => dispatch({ type : 'SET_EMAIL', payload : {email : email} }),
    setTel : (tel) => dispatch({ type : 'SET_TEL', payload : {tel : tel} })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);