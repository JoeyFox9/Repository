import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Login</Text>
      <StatusBar style="auto" />

      <TextInput
      style={styles.input}
      placeholder="Username"
      />

       <TextInput
            style={styles.input}
            placeholder="Password"
            />

        <View>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Signup</Text>
            </TouchableOpacity>
        </View>

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

input: {
    width: "90%",
     backgroundColor: '#fff',
     padding: 15,
     marginBottom: 10
}

});

