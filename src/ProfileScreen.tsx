import React from 'react';
import {Text,View, Button, TextInput, Alert} from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { styles } from './components/globalStyle';
import { ProfileScreenRouteProp } from './types';


export default function ProfileScreen() {

  //Recebendo parâmetros de outra tela
  const route = useRoute<ProfileScreenRouteProp>();
  const {name} = route.params;

  return <View>
            <Text style={styles.texto}>{name}</Text>
          </View>
}

