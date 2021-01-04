import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen ({navigation}){

      return (
        <View style={styles.container}>
          <Text> My Fishing mApp Login</Text>
          <StatusBar style="auto" />

          <TextInput
          style={styles.input}
          placeholder="Username"
          />

           <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                />

            <View style={styles.btnContainer}>
                <TouchableOpacity
                style={styles.userBtn}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                //style={styles.userBtn}
                onPress={() => alert("Signing up Please Wait")}
                >
                    <Text >No Account Yet? Signup Here</Text>
                </TouchableOpacity>
            </View>

        </View>
      );

}

function HomeScreen(){

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Home Screen</Text>

           </View>
      );

}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }



//type Props = {};
//export default class App extends React.Component<Props> {
//    render(){
//      return (
//        <AppContainer />
//      );
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

input: {
    width: "90%",
     backgroundColor: '#fff',
     padding: 15,
     marginBottom: 10
},

/*btnContainer: {
    //flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
},*/

userBtn: {
backgroundColor: "#00FF00",
padding: 15,
width: "45%"
},

btnTxt: {
fontSize: 18,
textAlign: "center"
}

});

export default App;

