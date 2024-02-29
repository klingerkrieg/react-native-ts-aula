import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,Button} from 'react-native';
import { HomeScreenNavigationProp } from './navigation/types';
import { useEffect, useState } from 'react';

import { ExampleComp } from './components/ExampleComp';

export default function HomeScreen() {

  useEffect(() => {
    // Code here will run after *every* render
    console.log("mounted")
  })

  // sem useState - variável comum (stateless)

  var valor1 = 0;
  const alterarValor1 = () => {
    valor1++;
    alert(valor1);
    document.getElementById('valor1').innerHTML = valor1.toString();
  }


  // com useState - variável de estado (stateful)

  const [valor2, setValor2] = useState(0);
  const alterarValor2 = () => {
    setValor2(valor2+1);
    //alert(valor2);
  }

  useEffect(() => {
    alert(valor2);
  }, [valor2])


  const [exibe, setExibe] = useState(true);
  function desmonta(){
    setExibe(false);
  }

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const proximaTela = () => {
    navigation.navigate('Profile', { name: 'Pedro' });
  }
  return <View onLayout={(evt) => console.log('o layout está pronto.')}>
          <Text>Home</Text>
          <Button onPress={() => proximaTela() } title="Proxima"></Button>

          <Button onPress={() => alterarValor1() } title="Alterar valor 1"></Button>
          <Text id="valor1">{valor1}</Text>


          <Button onPress={() => alterarValor2() } title="Alterar valor 2"></Button>
          <Text>{valor2}</Text>

          {exibe && 
            <ExampleComp></ExampleComp>
          }
          <Button onPress={() => desmonta() } title="Desmonta"></Button>
        </View>
}


/*<HomeScreenNavigationProp>*/