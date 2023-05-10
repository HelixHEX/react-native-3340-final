import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import metal from "../data/metal.json";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/Band";
import { colors } from "../libs/theme";

const Bands = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
      <Text style={styles.heading}>Bands</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={metal}
        renderItem={({ item }) => {
          return <Band {...item} />;
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.ID.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.gray['300']
  },
  heading: {
    fontSize: 40,
    fontWeight: "200",
    color: colors.gray['50']
  },
});

export default Bands;
