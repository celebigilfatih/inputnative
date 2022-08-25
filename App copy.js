import { StatusBar } from "expo-status-bar";
import InsetShadow from "react-native-inset-shadow";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const background = "#EAECF0";
const textTitle = "#222";

export default function App() {
  const NeoMorph = ({ children }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>{children}</View>
      </View>
    );
  };
  const Morph = ({ children }) => {
    return (
      <View style={[styles.innerShadow, styles.dropShadow]}>{children}</View>
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
            onPress={() => alert("Hello, world!")}
            style={{
              height: 56,
              justifyContent: "center",
              marginTop: 40,
              backgroundColor: "#EAECF0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "#000" }}>Giriş</Text>
          </TouchableOpacity>
        </NeoMorph>

        <View
          style={{
            marginTop: 40,
            width: 280,
            height: 120,
            backgroundColor: "#EAECF0",
            borderRadius: 30,
          }}
        >
          <InsetShadow
            containerStyle={styles.shadow}
            shadowRadius={3}
            shadowOffset={3}
            elevation={3}
            shadowOpacity={0.3}
            color="#000"
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignSelf: "center",
                padding: 10,
              }}
            >
              <Text>This view has an inset shadow!</Text>
            </View>
          </InsetShadow>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },

  menu: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },

  textTitle: {
    color: textTitle,
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 17,
  },

  loginGroup: {
    flex: 3,
    justifyContent: "center",
    flex: 1,
  },

  textInput: {
    height: 46,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#EAECF0",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EAECF0",
    borderRadius: 5,
    marginBottom: 20,
  },

  inner: {
    backgroundColor: "#EAECF0",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EAECF0",
    borderRadius: 10,
    marginBottom: 20,
  },

  topShadow: {
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowColor: "#FAFBFF",
  },
  bottomShadow: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowColor: "#A6ABBD",
  },
  innerShadow: {
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: "#fafbff",
  },
  dropShadow: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: "#A6ABBD",
  },
  shadow: {
    borderRadius: 25,
  },
});
