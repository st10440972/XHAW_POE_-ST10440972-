import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function FacultiesScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Faculties</Text>
            <Text style={styles.subtitle}>Six-Month Courses</Text>
            <Text style={styles.text}>First Aid (6 Months): R1500 </Text>
            <Text style={styles.text}>Sewing (6 Months): R1500 </Text>
            <Text style={styles.text}>Landscaping (6 Months): R1500</Text>
            <Text style={styles.text}>Life Skills (6 Months): R1500</Text>
            <Text style={styles.subtitle}>Six-Week Courses</Text>
            <Text style={styles.text}>Child Minding (6 Weeks): R750</Text>
            <Text style={styles.text}>Cooking (6 Weeks): R750</Text>
            <Text style={styles.text}>Garden Maintenance (6 Weeks): R750</Text>
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
        color: '#5B3E31',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#3E2A20',
        lineHeight: 28,
        textAlign: 'center',
        marginVertical: 5,
    },
    subtitle: {
        fontSize: 18,
        color: '#5B3E31',
        textAlign: 'center',
        marginBottom: 30,
    },
});