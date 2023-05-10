import { View, StyleSheet, Text } from "react-native";
import { colors } from "../libs/theme";

interface Props {
  text: string;
}
const Style = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "95%",
    backgroundColor: colors.gray["200"],
    marginTop: 20,
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5
  },
  text: {
    color: "white",
    fontWeight: "400",
    fontSize: 24,
  },
});

export default Style;
