import { View, Text, Button, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedScreen = () => {


function testeSalvar(){
    var func = async () => {
        try {
            await AsyncStorage.setItem("nome", "João");
        } catch (error) {
            console.log(error);
        }
    }
    func();
}

function testeRecuperar(){
  var func = async () => {
      try {
          let nomeSalvo = await AsyncStorage.getItem("nome");
          //Alert.alert('Nome que está salvo',nomeSalvo?.toString());
          alert(nomeSalvo);
      } catch (error) {
          console.log(error);
      }
  }
  func();
}




  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18 }}>Feed Screen</Text>

      <Button onPress={testeSalvar} title="Teste salvar"/>

      <Button onPress={testeRecuperar} title="Teste recuperar"/>
    </View>
  );
};

export default FeedScreen;