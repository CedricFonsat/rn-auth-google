import { View, Text, TouchableOpacity } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import React from "react";
    // issuer: 'https://accounts.google.com',
    // clientId: '525511159290-7e3c8lbkhrigkb1hkn79gq434r16qafl.apps.googleusercontent.com',
    // redirectUri: makeRedirectUri({ scheme: 'success-auth' }),
 
const App = () => {

    const [request1, response1, promptAsync1] = Google.useAuthRequest({
        expoClientId: 'nle_ZycxWdDrYXjVa-q1FNdtA3jzAAIwbXCtpzPa',
        iosClientId: "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",

       // iosClientId: 'my-ios-id',
      });
    
      React.useEffect(() => {
        if (response1?.type === 'success') {
          const { authentication } = response1;
        }
      }, [response1]);
    
      console.log('reponse', response1)


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
   <Text>hhhh</Text>

   <TouchableOpacity onPress={() => promptAsync1()}>
            <Text >Connect with Google</Text>
          </TouchableOpacity>
  </View>
  );
};

export default App;
