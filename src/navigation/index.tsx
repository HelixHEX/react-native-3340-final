import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "../libs/theme";

// SCREENS
import Bands from "../screens/Bands";
import Styles from "../screens/Styles";
import Stats from "../screens/Stats";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const iconSize = 24;
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: ({ focused, children }) => {
            let color = focused ? colors.salmon : colors.gray["50"];
            return <Text style={{ color: color }}>{children}</Text>;
          },
          tabBarStyle: {
            paddingTop: 10,
            height: 90,
            backgroundColor: '#1D1D1D'
          },
          // tabBarBackground: () => (
          //   <BlurView
          //     tint="light"
          //     intensity={100}
          //     style={StyleSheet.absoluteFill}
          //   />
          // ),
          
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              let color = focused ? colors.salmon : colors.gray["50"];
              return <Feather name="music" size={iconSize} color={color} />;
            },
          }}
          name="Bands"
          component={Bands}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              let color = focused ? colors.salmon : colors.gray["50"];
              return (
                <Feather name="bar-chart-2" size={iconSize} color={color} />
              );
            },
          }}
          name="Stats"
          component={Stats}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              let color = focused ? colors.salmon : colors.gray["50"];
              return <Feather name="disc" size={iconSize} color={color} />;
            },
          }}
          name="Styles"
          component={Styles}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
