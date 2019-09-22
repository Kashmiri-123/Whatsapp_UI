import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Avatar, Card, Title, Paragraph, Button} from 'react-native-paper';
import MyCard from "./Card";
export default class ChatScreen extends React.Component {
    render()
    {
        return (
            <ScrollView>
            <MyCard name="Kashmiri"/>
            <MyCard name="Chandana"/>
            <MyCard name="Rita"/>
            </ScrollView>
        );
    }
}