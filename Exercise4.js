import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Create style objects for Parent and Child
const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
    },
    Child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, {backgroundColor: 'skyblue'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.Child, {backgroundColor: 'mediumaquamarine'}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.Child, {backgroundColor: 'crimson'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;