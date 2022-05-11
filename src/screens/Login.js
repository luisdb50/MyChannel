import React from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View
      style={{
        borderColor: '#000',
        borderBottomWidth: 1,
        width: 200,
        marginTop: 10,
      }}>
      <TextInput
        style={{fontSize: 20}}
        value={user}
        onChangeText={text => setUser(text)}
      />
    </View>
  );
};

export default Login;
