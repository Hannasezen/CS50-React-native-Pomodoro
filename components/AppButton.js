import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default AppButton = ({ text, onPress, color }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: color,
                }
            ]}
        >
            <View >
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'red'
    },
    buttonText: {
        textTransform: 'uppercase',
        textAlign: 'center',
    },
})