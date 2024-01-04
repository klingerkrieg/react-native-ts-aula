/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
*/

import React, { ReactElement, ReactPortal } from 'react';
import {Text,View, Button, TextInput, Alert} from 'react-native';

import {Title, Title2} from './src/components/Title';

export default function ProfileScreen() {

  const [text, onChangeText] = React.useState('Text padrão');

  const enviar = () => { console.log(text) }

  const acaoExterna = () => {
    console.log("Acao externa");
    Alert.alert("oi2");
  }

  return <View>
            <Title backgroundColor='red' hasButton={true}>teste1</Title>
            <Title2 backgroundColor='#ccc' 
                    size={30} 
                    hasButton={true}
                    onPressButton={acaoExterna}>teste2</Title2>
            <Text>{text}</Text>
            <TextInput placeholder="Digite seu nome"
                value={text}
                autoFocus={true}
                onChangeText={onChangeText}
                style={{borderWidth:1}}
                />
            <Button title="Enviar" onPress={enviar}/>
          </View>
}

