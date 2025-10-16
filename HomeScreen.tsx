import react from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}: any){
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Skill Grow Academy</Text>
            <Text style={Styles.subtitle}>Empowering the Elderly Through Education</Text>

            <TouchableOpacity 
            style={Styles.button}
            onPress={() => navigation.navigate('About')}
            >
                <Text style={Styles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={Styles.button}
            onPress={() => navigation.navigate('Faculties')}
            >
                <Text style={Styles.buttonText}>Faculties</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate('FeeCalculator')}
            >
                <Text style={Styles.buttonText}>Fee Calculator</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBDC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5B3E31',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#5B3E31',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#CBB89D',
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
});