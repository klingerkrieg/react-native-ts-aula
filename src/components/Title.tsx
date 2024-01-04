import { ReactElement, ReactNode, ReactPortal } from 'react';
import {Text,View, Button, TextInput, Alert} from 'react-native';

type TitleProps = {
  size? : number,
  backgroundColor?:string,
  hasButton?:boolean,
  onPressButton?: () => void,
  //ou
  //onPressButton?: any,
  children: ReactNode
}

export function Title2 (_props : TitleProps){

  //clonando um objeto
  let props = {..._props};
  props.size = _props.size || 20;
  props.backgroundColor = _props.backgroundColor || 'green';

  return <View><Text style={{fontSize:props.size, 
                        textAlign:'center', 
                        backgroundColor:props.backgroundColor}}>
          {props.children}
          </Text>
          {props.hasButton && 
              <Button title="Ok" onPress={props.onPressButton}/>
            }
          </View>
}

export const Title = ({size=20, children, backgroundColor, hasButton} : TitleProps ) => {
  return <View>
            <Text style={{fontSize:size, 
                          textAlign:'center', 
                          backgroundColor:backgroundColor}}>
            {children}

            </Text>
            {hasButton && 
              <Button title="Ok"/>
            }
          </View>
}

