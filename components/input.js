import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const Input = (text) => {
    const [enteredtext, setenteredText] = useState('');
    //1.2获取当前输入
    const TextInputHandler = textIn => setenteredText(textIn);
    //添加到数组
    const addGoalHandler = () => {
        text.clickAdd(enteredtext);
        setenteredText('');
    }

    const cancerAdd = () => {
        text.cancerAdd();
        setenteredText('');
    }
    //每调用addGoalHandler,就要执行clickAdd，所有可以加括号，onpress只能写函数名，如果加了括号就会立即执行。

    return (
        <Modal visible={text.visible}>
            <View style={styles.container}>
                <TextInput placeholder='请输入...' style={styles.textIn} onChangeText={TextInputHandler} value={enteredtext}></TextInput>
                {/*onpress要调用app.js中的addTextHandler函数，函数中要用到状态enteredtext，所有需要用到bind传递参数*/}
                {/*1.0 <Button title="ADD" onPress={text.clickAdd.bind(this, enteredtext)}></Button> */}
                <View style={styles.buttonView}>
                    <View style = {styles.button}><Button title="ADD" onPress={addGoalHandler}></Button></View>
                    <View style = {styles.button}><Button title="CANCEL" color="red" onPress={cancerAdd}></Button></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textIn: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        margin: 10
    },
    buttonView: {
        width:'60%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    button: {
        width: '40%',
    }
});

export default Input;