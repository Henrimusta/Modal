import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';

const App = () => {
    const [isVisible, setIsVisible] = useState(0);

    const handlePress = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            {!isVisible && (
                <Pressable onPress={handlePress}>
                    <Text style={styles.text}>This message is pressable, press me</Text>
                </Pressable>
            )}

            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                {isVisible ? (
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <Text style={styles.modalText}>Modal message</Text>
                            <Pressable onPress={closeModal}>
                                <Text style={styles.closeButton}>Close modal</Text>
                            </Pressable>
                        </View>
                    </View>
                ) : null}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    modalBox: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 20,
        color: 'blue',
    },
    closeModal: {
        fontSize: 20,
        color: 'blue',
    },
});

export default App;