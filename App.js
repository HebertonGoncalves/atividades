import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity><Text>Segunda</Text></TouchableOpacity>
      <TouchableOpacity><Text>Terça</Text></TouchableOpacity>
      <TouchableOpacity><Text>Quarta</Text></TouchableOpacity>
      <TouchableOpacity><Text>Quinta</Text></TouchableOpacity>
      <TouchableOpacity><Text>Sexta</Text></TouchableOpacity>
      <StatusBar style="auto" />
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
