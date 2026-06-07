import {Text,TextInput,TouchableOpacity,View }from'react-native'
import {useNavigation }from'@react-navigation/native'
import {StackNavigationProp }from'@react-navigation/stack'

export type PublicStackParamsList = {
  Login:undefined
  Register:undefined
}

export const Login = () => {
const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

return (
<View className="flex-1 items-center justify-center">
<Text>Tela de login!</Text>

<TextInput className="bg-gray-500 w-full"/>

<TouchableOpacity onPress={() => navigation.navigate('Register')}>
<Text>Registrar</Text>
</TouchableOpacity>
</View>
  )
}