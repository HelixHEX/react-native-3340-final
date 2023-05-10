import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../libs/theme";
import metal from "../data/metal.json";

const Stats = () => {
  const totalFans = metal
    .reduce((acc, band) => {
      return acc + band.fans;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalCountries = metal
    .map((band) => band.origin)
    .filter((value, index, array) => array.indexOf(value) === index).length;
  const totalActive = metal
    .map((band) => band.split)
    .filter((value) => value === "-").length;
  const totalSplit = metal
    .map((band) => band.split)
    .filter((value) => value !== "-").length;
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Metal 🤘</Text>
      <Text style={styles.statName}>
        Count: <Text style={styles.stat}>{metal.length}</Text>
      </Text>
      <Text style={styles.statName}>
        Fans: <Text style={styles.stat}>{totalFans}</Text>
      </Text>
      <Text style={styles.statName}>
        Countries: <Text style={styles.stat}>{totalCountries}</Text>
      </Text>
      <Text style={styles.statName}>
        Active: <Text style={styles.stat}>{totalActive}</Text>
      </Text>
      <Text style={styles.statName}>
        Split: <Text style={styles.stat}>{totalSplit}</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray["300"],
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  statName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 15,
  },
  stat: {
    color: "white",
    fontWeight: "normal",
  },
});

export default Stats;
