import { ScrollView,StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"blue"
  },
  textContainer:{
    backgroundColor:"white"
  },
  text1: {
    marginBottom:80,
    marginTop:80,
    fontSize:30
    },
  text2:{
    marginBottom:80,
    marginTop:80,
    textAlign:"center"
  },
  text3:{
    marginBottom:80,
    marginTop:80,
    fontWeight:"bold"  }
});
export default function App() {
  
  return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Coucou </Text>
          <Text style={styles.text2}>Salut</Text>
          
          
          <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
          <Text style={styles.text1}>Coucou </Text>
          <Text style={styles.text2}>Salut</Text>
          
          
          <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
          <Text style={styles.text1}>Coucou </Text>
          <Text style={styles.text2}>Salut</Text>
          
          
          <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
          <Text style={styles.text1}>Coucou </Text>
          <Text style={styles.text2}>Salut</Text>
          
          
          <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
  )}