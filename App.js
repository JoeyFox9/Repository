import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';

function LoginScreen ({navigation}){

      return (
        <View style={styles.container}>
          <Text style={styles.Text}> My Fishing mApp Login</Text>
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
                onPress={() => navigation.navigate('Signup')}
                >
                    <Text >No Account Yet? Signup Here</Text>
                </TouchableOpacity>
            </View>

        </View>
      );

}

function HomeScreen({navigation}){

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Home Screen</Text>

            <View style={styles.btnContainer2}>
                          <TouchableOpacity
                                style={styles.userBtn}
                                onPress={() => navigation.navigate('GeoMap')}
                            >
                                <Text style={styles.btnTxt}>Geo Maps</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                     style={styles.userBtn}
                                     onPress={() => navigation.navigate('Gallery')}
                                >
                                <Text style={styles.btnTxt}>Gallery</Text>
                          </TouchableOpacity>
            </View>

            <TextInput
                      style={styles.input}
                      placeholder="Enter Conditions"
                      />

        </View>

      );

}

function SignupScreen({navigation}){

      return (
        <View style={styles.container2}>
                  <Text> My Fishing mApp Signup</Text>
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
                        style={styles.userBtn2}
                        onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={styles.btnTxt}>Signup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        //style={styles.userBtn}
                        onPress={() => navigation.navigate('Login')}
                        >
                            <Text >Already Have An Account? Login Here</Text>
                        </TouchableOpacity>
                    </View>

                </View>
              );

}


function GeoMapScreen(){

      return (
        <View style={styles.container}>
              <MapView style={styles.map} />
            </View>

      );

}

function GalleryScreen(){

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Gallery</Text>



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
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="GeoMap" component={GeoMapScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
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

    Text: {
        fontSize: 40,
        textAlign: "center"
    },

  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
      flex: 1,
      backgroundColor: '#00FF00',
      alignItems: 'center',
      justifyContent: 'center',
    },

input: {
    width: "90%",
     backgroundColor: '#fff',
     padding: 15,
     marginBottom: 10
},

btnContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
},

userBtn: {
backgroundColor: "#00FF00",
padding: 15,
width: "45%",
},

userBtn2: {
backgroundColor: "#0000FF",
padding: 15,
width: "45%",
},

map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

btnTxt: {
fontSize: 18,
textAlign: "center"
}

});

export default App;

