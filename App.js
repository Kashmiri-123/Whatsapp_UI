import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createMaterialTopNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import StatusScreen from "./Components/Status";
import ChatScreen from "./Components/Chat";
import {Ionicons,Entypo} from "@expo/vector-icons";

const TopNavigator = createMaterialTopNavigator({
  Chats : {screen : ChatScreen},
  Status : {screen : StatusScreen},

},{
tabBarOptions: {
    fontSize: 12,
    backgroundColor: "#047a6c"
  }
}
);

const TopHeader = createStackNavigator({
  Chats : TopNavigator
},{
  defaultNavigationOptions : {
   title : "WhatsApp",
   headerStyle : {
     backgroundColor : "#047a6c",
   },
   headerTintColor : "#fff",
   headerTitleStyle : {
     fontWeight : "bold"
   },
   headerRight : (
     <View styles={{flexDirection: "row", padding : 20}}>
     <Ionicons 
      name="md-search" size={32} color="white" />
      <Entypo 
      name="dots-three-vertical" size={23} color="white" />
     </View>
   )
  }
}
);

export default createAppContainer(TopNavigator);