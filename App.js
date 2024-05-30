import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>{/*Parte de rolagem de tela*/}
        <View style={ [styles.Card, styles.red]}> {/*Parte de rolagem de tela*/}

        <Text style={styles.textoBase}>Testando a aplicação </Text>
        <Text style={styles.textoInterno}>Testando texto interno :D</Text>

        </View>

        <View style={ [styles.Card, styles.blue]}> {/*Parte de rolagem de tela*/}

        <Text style={styles.textoBase}>Testando a aplicação </Text>
        <Text style={styles.textoInterno}>Testando texto interno :D</Text>

        </View>

       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,

  },

  blue:{
    backgroundColor: '#836fff',

  },
  
  red:{
    backgroundColor: '#f08080',

  },

  Card:{
    marginTop:10,
    height:100,
    borderRadius: 3,
    width:300,
  },

  textoBase:{
    color:'#000000',
    fontWeight:800,

  },

  textoInterno:{
    color:'red',
    fontWeight:400,
    
  },
});