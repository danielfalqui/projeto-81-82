import {CreateBottomNavigator} from 'navigation/bottom-tabs';
import {createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import Profile from "../screens/Profile";
const Tab = createMaterialBottomTabNavigator();

//Parabéns por ter usado  o material bottom tab navigator, gosteio da ousadia
const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused 
              ? "book" 
              : "book-outline";
            } else if (route.name === "CreatePost") {
              iconName = focused ? "create" : "create-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        //Aqui está faltando o TabBarOptions
        TabBarOptions = {{
            activeColor={"#ee8249"}
            inactiveColor={"gray"}
         }}
      >
        <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <Tab.Screen name="Criar História" component={CreateStory} options={{headerShown:false}}/>
      </Tab.Navigator>
    );
  };
