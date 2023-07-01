
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';

export default function App() {
  const [isPassword, setIsPassword] = useState(true)
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Fazer login </Text>

      <TextInput 
      placeholder='Email'
      autoCapitalize='none'
      style={styles.inputEmail}
      placeholderTextColor='#BDBDBD'/>

  <View style={styles.inputArea}>
      <TextInput  
        placeholder='Senha'
        style={styles.inputPassword}
        placeholderTextColor='#BDBDBD'
        secureTextEntry={isPassword}/>

       <TouchableOpacity style={styles.icon} onPress={() => setIsPassword(!isPassword) }>
          {isPassword == true ?
            <FontAwesome5 name='eye-slash' size={24} color='#DC0E7B'/>
            :
            <FontAwesome5 name='eye' size={24} color='#DC0E7B'/>
          }
      </TouchableOpacity>

    </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleButton}> Entrar </Text>
        </TouchableOpacity>    

        <TouchableOpacity>
          <Text style={styles.recoverPass}> Esqueceu sua senha? </Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    color: '#DC0E7B',
    marginTop: 205,
    position: 'relative',
    marginBottom: 250,
  },

  inputEmail:{
    width: '90%',
    height: 50,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#DC0E7B',
    backgroundColor: '#F6F6F6',
  },

  inputArea:{
    width: '90%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
  },

  inputPassword:{
    width: '85%',
    height: 50,
    padding: 15,
    marginBottom: 10,
    color: '#DC0E7B',
    fontWeight: 'bold',
    borderRadius: 5,
  },

  icon:{
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button:{
    backgroundColor: '#DC0E7B',
    width: '80%',
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20
  },

  titleButton:{
    color: '#FFF',
    fontWeight: 'bold',
  },

  recoverPass:{
    marginTop: 10,
    color: '#DC0E7B',
    fontWeight: 'bold',
    marginBottom: 180,
  }
});
