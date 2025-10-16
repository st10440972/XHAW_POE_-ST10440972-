import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function FeeCalculatorScreen() {
    const [subjects, setSubjects] = useState('');
    const [total, setTotal] = useState<string | number | null>(null);

    const calculateFee = () => {
        const pricePerSubject = 500;
        const numSubjects = parseInt(subjects);
        if (!isNaN(numSubjects) && numSubjects > 0) {
            setTotal(numSubjects * pricePerSubject);
        } else {
            setTotal('Please enter a valid number of subjects');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fee Calculator</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter number of subjects"
            placeholderTextColor= '#888'
            keyboardType="numeric"
            value={subjects}
            onChangeText={setSubjects}
        />
        <TouchableOpacity style={styles.button} onPress={calculateFee}>
            <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {total && <Text style={styles.result}>Total Fee: R{total} </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBDC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize:28,
        fontWeight: 'bold',
        color: '#5B3E31',
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#5B3E31',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        marginVertical: 10,
        fontSize: 18,
        color: '#000',
    },
    button: {
        backgroundColor: "#CBB89D",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
    },
    buttonText: {
        fontSize: 20,
        color: '#2E1A12',
        fontWeight: '600',
        textAlign: 'center',
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#5B3E31',
    },
});