import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (


    <View style={{ backgroundColor: "#000000", flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: 'yellow' }}>

      </View>
    
      <View style={{ flex: 2, backgroundColor: 'red' }}>

      </View>

      <View style={{ flex: 3, backgroundColor: 'green' }}>

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
});
