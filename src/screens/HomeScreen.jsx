import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import React, { useState, useRef } from "react";
import jwtDecode from 'jwt-decode';
import LottieView from 'lottie-react-native';

    // issuer: 'https://accounts.google.com',
    // clientId: '525511159290-7e3c8lbkhrigkb1hkn79gq434r16qafl.apps.googleusercontent.com',
    // redirectUri: makeRedirectUri({ scheme: 'success-auth' }),
 
const HomeScreen = () => {

    const animation = useRef(null);
    const [request1, response1, promptAsync1] = Google.useAuthRequest({
        expoClientId: 'nle_ZycxWdDrYXjVa-q1FNdtA3jzAAIwbXCtpzPa',
        iosClientId: "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",

       // iosClientId: 'my-ios-id',
      });

      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [picture, setPicture] = useState()
      const [googleId, setGoogleId] = useState()

    
      React.useEffect(() => {
        if (response1?.type === 'success') {
          const { authentication } = response1;
          const idToken = authentication.idToken; // JWT token containing user info

          // Decode the JWT token to extract user information
          const decodedToken = jwtDecode(idToken);

          console.log(decodedToken, '¨¨¨¨¨¨¨¨');
      
          // Access the user's email and other data
          setEmail(decodedToken.email)
          setName(decodedToken.name)
          setPicture(decodedToken.picture)
          setGoogleId(decodedToken.sub)
      
          console.log('User Email:', email);
          console.log('User Name:', googleId);
        }
      }, [response1]);
    
      console.log('reponse', response1)


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets//app.json')}
      />
   <Text>Bienvenue, {name}</Text>
   <Text>{name}</Text>
   <Text>{email}</Text>
     <Image style={{
         width: 100,
         height: 100
     }}
     source={{
       uri: picture
   }}
   /> 


{/* {"at_hash": "sHEP5PR2BeiEQ1U_nGeZPQ", 
"aud": "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",
 "azp": "34155408716-b8vb7q6l9teo0t1opq7l6v67fakoe7q9.apps.googleusercontent.com",
  "email": "ced97x@gmail.com", "email_verified": true, "exp": 1692479567, "given_name": 
  "CED", "iat": 1692475967, "iss": "https://accounts.google.com", "locale": "fr",
   "name": "CED",
    "picture": "https://lh3.googleusercontent.com/a/AAcHTte-_7Ai5OsGcdlxDW2ZSFJrwyhBaf0knZwCEcGMGepDJg=s96-c",
     "sub": "100154493592427435520"} */}

   <TouchableOpacity onPress={() => promptAsync1()}>
            <Text >Connect with Google</Text>
          </TouchableOpacity>
  </View>
  );
};

export default HomeScreen;
