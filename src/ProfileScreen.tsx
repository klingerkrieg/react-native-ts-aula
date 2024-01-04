import React from 'react';
import {Text,View} from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { styles } from './components/globalStyle';
import { ProfileScreenRouteProp } from './navigation/types';


export default function ProfileScreen() {

  const route = useRoute<ProfileScreenRouteProp>();
  const {name} = route.params;

  return <View>
            
            <Text style={styles.texto}>{name}</Text>
            
          </View>
}
