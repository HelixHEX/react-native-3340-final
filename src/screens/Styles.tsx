import { FlatList, StyleSheet, View } from "react-native";
import metal from "../data/metal.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../libs/theme";
import Style from "../components/Style";

const Styles = () => {
  const styles = metal.map((band) => band.style.split(",")).flat();

  const uniqueStyles = styles.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
  });

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        data={uniqueStyles}
        renderItem={({ item }) => <Style text={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.gray["300"],
    height: "100%",
    paddingTop: 80,
  },
  flatList: {
    paddingBottom: 30,
  }
});

export default Styles;
