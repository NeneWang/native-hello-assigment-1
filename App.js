import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [dotsShow, setDotsShow] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotsShow((dotsShow) => dotsShow === 3 ? 0 : dotsShow + 1);
    }, 500);
    return () => clearInterval(interval);
  })


  // Create an array of dots based on the value of dotsShow
  const dotsArray = Array.from({ length: dotsShow }, (_, index) => index);

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hola, Coder!</Text>
      <StatusBar style="auto" />
      {/* Space */}
      <Text> </Text>
      <Text>de Nelson</Text>
      <View style={styles.loading}>
        <Text style={styles.dots}> </Text>
        {dotsArray.map((dot) => (
          <Text key={dot} style={styles.dots}>
            .
          </Text>
        ))}
        <Text> </Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loading: {
    fontSize: 50,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  dots:{
    fontSize: 50,
    fontWeight: 'bold',
    flexDirection: 'row',
  
  }
});
