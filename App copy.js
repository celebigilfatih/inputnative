import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const background = '#B5D2EF'
const textTitle = '#5F84A7'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginGroup}>
        <Text style={styles.textTitle}>Kullanıcı Adı</Text>
        <TextInput style={styles.textInput}></TextInput>
        <Text style={styles.textTitle}>Şifre</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    color: textTitle,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 17
  },
  loginGroup: {
    width: '90%'
  },
  textInput: {
    height: 56,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 30,
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 15
  },
  innerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  }
});
