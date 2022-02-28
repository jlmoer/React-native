import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useEffect, useState } from "react";

export default function App() {
  const [showLoading, setShowLoading] = useState(false);

  const handlePress = () => {
    setShowLoading(true)
    alert("You clicked and logged in!")
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.anotherone}>
        <Image
          style={styles.img}
          source={require("./assets/konexio.png")}
        />
        <Text style={styles.firstText}>
          Fratrem Rupilio vero superiorem superiorem enim fratrem Philo numquam Saepe excellentiae Q parem amicitia tamquam ille anteposuit suosque nostro grege qualis grege inferiori anteibat Maximum qualis inferiori volebat posse superiorem.
        </Text>
        <Image
          style={styles.img}
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
        />
        <Text style={styles.secondText}>
          Fratrem Rupilio vero superiorem superiorem enim fratrem Philo numquam Saepe excellentiae Q parem amicitia tamquam ille anteposuit suosque nostro grege qualis grege inferiori anteibat Maximum qualis inferiori volebat posse superiorem.
        </Text>
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
          <Text style={styles.btnText}>
            Login
          </Text>
        </TouchableOpacity>
        {showLoading === true ?
          <ActivityIndicator />
          : null
        }
        <Text style={styles.thirdText}>
          Fratrem Rupilio vero superiorem superiorem enim fratrem Philo numquam Saepe excellentiae Q parem amicitia tamquam ille anteposuit suosque nostro grege qualis grege inferiori anteibat Maximum qualis inferiori volebat posse superiorem.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 5,
  },
  anotherone: {
    backgroundColor: "white",
  },
  firstText: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
  },
  secondText: {
    marginTop: 80,
    marginBottom: 80,
    textAlign: "center",
  },
  thirdText: {
    marginTop: 80,
    marginBottom: 80,
    fontWeight: 'bold',
  },
  img: {
    height: 40,
    width: 124,
    alignSelf: 'center',
  },
  btn: {
    marginTop: 10,
    alignSelf: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
