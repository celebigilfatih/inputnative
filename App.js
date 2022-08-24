import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity} from 'react-native';

const background = '#DEE9FD'
const textTitle = '#5F84A7'

export default function App() {

  const NeoMorph = ({ children}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
            {children}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>

      <SafeAreaView>
        <View style={styles.header}>
            <NeoMorph>
              <View style={styles.inner}>
                <View style={styles.menu}>
                  <Text>10</Text>
                </View>
              </View>
            </NeoMorph>
            <NeoMorph>
              <View style={styles.inner}>
                <View style={styles.menu}>
                  <Text>10</Text>
                </View>
              </View>
            </NeoMorph>
        </View>
      </SafeAreaView>
     
      <View style={styles.loginGroup}>
          <Text style={styles.textTitle}>Kullanıcı Adı</Text>
          <NeoMorph>
              <TextInput style={styles.textInput}></TextInput>
          </NeoMorph>
          <Text style={styles.textTitle}>Şifre</Text>
          <NeoMorph>
              <TextInput style={styles.textInput}></TextInput>
          </NeoMorph>
          <NeoMorph>
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={{ height: 56, justifyContent: 'center', marginTop: 40, backgroundColor: '#DEE9F7', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
            <Text style={{ fontSize: 20, color: '#000' }}>Giriş</Text>
          </TouchableOpacity>
          </NeoMorph>

      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingLeft: 15,
    paddingRight: 15

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60
  },
  
  menu: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    color: textTitle,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 17
  },

  loginGroup: {
    flex: 3,
    justifyContent: 'center',
    flex: 1,
  },

  textInput: {
    height: 56,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2ecfd',
    borderRadius: 10,
    marginBottom: 20
  },

  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e2ecfd',
    borderRadius: 10,
    marginBottom: 20
  },

  topShadow: {
      shadowOffset: {
        width: -4,
        height: -4,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#B7C4DD',
}
});
