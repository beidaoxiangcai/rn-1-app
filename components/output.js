import React from "react";
import {StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";


const OutPut = item => {
    //不能省略return和()
    return(
        <TouchableWithoutFeedback onPress={item.onDelete.bind(this, item.id)}>
            <View style = {styles.listItem}>
                <Text>
                    {item.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default OutPut;