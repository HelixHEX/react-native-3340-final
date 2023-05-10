import { View, StyleSheet, Text } from "react-native";
import { colors } from "../libs/theme";

interface Props {
  ID: number;
  band_name: string;
  fans: number;
  formed: string;
  split: string;
  style: string;
  origin: string;
}

const Band = ({ ID, band_name, fans, formed, split, style, origin }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={[
            styles.name,
            {
              textDecorationLine: split === "-" ? "line-through" : "none",
              color: split === "-" ? '#666' : '#fff',
              fontWeight: split === "-" ? "normal" : "bold",
            },
          ]}
        >
          {band_name}
        </Text>
        <Text style={styles.origin}>{origin}</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={styles.formed}>{formed}</Text>
        <Text style={styles.fans}>
          {(fans * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.gray["200"],
    height: 80,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    color: colors.salmon,
    fontSize: 18,
  },
  origin: {
    color:'#999',
    fontSize: 18

  },
  formed: {
    color: colors.gray["50"],
    fontWeight: "400",
    fontSize: 18,
  },
  fans: {
    color: colors.gray["50"],
    fontWeight: "100",
    fontSize: 18,
  },
});

export default Band;
