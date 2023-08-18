import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { makeRedirectUri } from 'expo-auth-session';


export default function App() {
  const [token, setToken] = useState(null);

  const config = {
    clientId: '525511159290-7e3c8lbkhrigkb1hkn79gq434r16qafl.apps.googleusercontent.com',
    redirectUri: makeRedirectUri({ scheme: 'success-auth' }),
    scopes: ['openid', 'profile', 'email'],
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await AuthSession.startAsync({
        authUrl:
          `https://accounts.google.com/o/oauth2/v2/auth` +
          `?client_id=${config.clientId}` +
          `&redirect_uri=${encodeURIComponent(config.redirectUri)}` +
          `&response_type=token` +
          `&scope=${encodeURIComponent(config.scopes.join(' '))}`,
      });

      if (response.type === 'success' && response.params.access_token) {
        setToken(response.params.access_token);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoogleSignIn}>
        <Text>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Display user data using 'token' */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
