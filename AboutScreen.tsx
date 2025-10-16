import React from 'react';
import {ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.text}>
                Skill Grow Academy is an initiative founded by Precious Radebe, to help the elderly to gain new skills and knowlege. 
                The program focuses on easy learning, accessibility, and empowerment for older individuals who want to further enhance their education.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5EBDC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '5B3E31',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#3E2A20',
        textAlign: 'center',
        lineHeight: 28,
    },
});