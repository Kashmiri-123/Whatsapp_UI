import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Avatar, Card, Title, Paragraph, Button} from 'react-native-paper';
import {Ionicons} from "@expo/vector-icons";
 
class MyCard extends React.Component {
    render()
    {
        return (
            <View style={{margin:4}}>
                <Card style={{elevation:5}}>
                   <View style={{flexDirection:"row", padding:10}}>
                       <View style={{height:80}}>
                        <Image style={{height:80,width:80,borderRadius:40}}
                         source={{uri: "https://unsplash.com/photos/4euubO4CasU"}}
                        />
                       </View>
                        <View>
                           <Card.Content>
                               <Title>
                                   {props.name}
                               </Title>
                               <Paragraph>Hello</Paragraph>
                           </Card.Content>
                        </View>
                   </View>
                </Card>
            </View>
        );
    }
}