import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined; //A tela home não recebe parâmetros
    Profile: {       //A tela Profile recebe apenas name do tipo string
      name : string
    }
  }
//Criamos o tipo que usaremos dentro de HomeScreen para chamar Profile
export type HomeScreenNavigationProp = NativeStackNavigationProp<
                                                            HomeStackNavigatorParamList,
                                                            'Profile'
                                                            >;
//Criamos o tipo que usaremos dentro de Profile para receber os parâmetros
export type ProfileScreenRouteProp = RouteProp<
                                            HomeStackNavigatorParamList,
                                            'Profile'
                                            >;

export type BottomTabNavigatorParamList = {
                                            HomeStack: HomeStackNavigatorParamList;
                                            Feed: undefined;
                                            Settings: undefined;
                                          };