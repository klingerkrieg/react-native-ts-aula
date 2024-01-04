import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,Button} from 'react-native';
import { HomeScreenNavigationProp } from './types';

export default function HomeScreen(  ) {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const proximaTela = () => {
    //Enviando parâmetros para outra tela
    navigation.navigate('Profile', { name: 'Pedro' });
  }
  return <View>
          <Text>Home</Text>
          <Button onPress={() => proximaTela() } title="Proxima"></Button>
        </View>
}
