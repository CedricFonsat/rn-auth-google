import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import React, { useState, useRef, useEffect } from "react";
import jwtDecode from "jwt-decode";
//import LottieView from "lottie-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// issuer: 'https://accounts.google.com',
// clientId: '525511159290-7e3c8lbkhrigkb1hkn79gq434r16qafl.apps.googleusercontent.com',
// redirectUri: makeRedirectUri({ scheme: 'success-auth' }),

{
  /* {"at_hash": "sHEP5PR2BeiEQ1U_nGeZPQ", 
"aud": "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",
 "azp": "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",
  "email": "ced97x@gmail.com", "email_verified": true, "exp": 1692479567, "given_name": 
  "CED", "iat": 1692475967, "iss": "https://accounts.google.com", "locale": "fr",
   "name": "CED",
    "picture": "https://lh3.googleusercontent.com/a/AAcHTte-_7Ai5OsGcdlxDW2ZSFJrwyhBaf0knZwCEcGMGepDJg=s96-c",
     "sub": "100154493592427435520"} 
    
    
     <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/app.json')}
      />
    
    
    */
}

const Stack = createNativeStackNavigator();

const App = () => {
 // const animation = useRef(null);
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  const [request1, response1, promptAsync1] = Google.useAuthRequest({
    expoClientId: "nle_ZycxWdDrYXjVa-q1FNdtA3jzAAIwbXCtpzPa",
    iosClientId:
      "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",

    // iosClientId: 'my-ios-id',
  });

  useEffect(() => {
    if (response1?.type === "success") {
      const { authentication } = response1;
      const idToken = authentication.idToken; // JWT token containing user info

      // Decode the JWT token to extract user information
      const decodedToken = jwtDecode(idToken);

      console.log(decodedToken, "¨¨¨¨¨¨¨¨");

    }
  }, [response1]);

//  console.log("reponse", response1);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'blue' }}>
    <TouchableOpacity onPress={() => promptAsync1()}>
      <Text>Connect with Google</Text>
    </TouchableOpacity>
  </View>
  );
}



  /* <Text>Bienvenue, {name}</Text>
<Text>{name}</Text>
<Text>{email}</Text>
  <Image style={{
      width: 100,
      height: 100
  }}
  source={{
    uri: picture
}}
/>  */


export default App;
