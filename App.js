import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import OutPut from './components/output';
import Input from './components/input';

export default function App() {
  //1.0 const [enteredtext, setenteredText] = useState('');

  //输入文本的数组不用放到自定义组件里，因为要在flatList中用
  const [enteredTextList, setenteredTextList] = useState([]);

  const [isAdd, setIsAdd] = useState(false);

  //获取当前输入
  //1.0
  // function TextInputHandler(text){
  //   setenteredText(text);
  // }
  //1.1const TextInputHandler = text => setenteredText(text);

  //将当前输入添加到数组里
  //1.0
  // const addTextHandler = () => {
  //   setenteredTextList((textList) => [...textList, enteredtext]);

  //保存为对象数组，将对象的id属性作为列表的key
  //...表示获取当前数组的快照
  //1.1
  const addTextHandler = (enteredtext) => {
    setenteredTextList(
      (textList) => [
        ...textList,
        { text: enteredtext, id: Math.random().toString() }]
    );
    setIsAdd(false);
  };

  const deleteTextHandler = (itemId) =>{
    setenteredTextList((currentText) => 
    currentText.filter(item => item.id !== itemId));
  }

  const cancerAddHandler = () => {
    setIsAdd(false);
    }

  return (
    <View style={styles.screen}>
      <Button title = "add goals!" onPress={() => setIsAdd(true)}></Button>
      {/*1.0 <View style={styles.container}>
        <TextInput placeholder='请输入...' style={styles.textIn} onChangeText={TextInputHandler} value={enteredtext}></TextInput>
        <Button title="Click me" onPress={addTextHandler}></Button>
      </View> */}
      {/*1.1 自定义组件Input*/}
      <Input visible = {isAdd} clickAdd={addTextHandler} cancerAdd = {cancerAddHandler}/>

      {/*1.0 <ScrollView>
        {enteredTextList.map((goal) =>
          <View style={styles.listItem}>
            <Text>{goal}</Text>
          </View>)}
      </ScrollView> */}

      <FlatList
        data={enteredTextList}
        renderItem={goal =>
          //1.1 <View style={styles.listItem}>
          //   <Text>{goal.item.text}</Text>
          // </View>}
          //1.2 自定义组件OutPut
          <OutPut id = {goal.item.id} text={goal.item.text} onDelete = {deleteTextHandler} />}//属性名要和自定义组件名一致
        keyExtractor={goal => goal.id} //如果goal有唯一的key属性，则不需要额外写。
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  //放到自定义组件里
  // container: {
  //   backgroundColor: '#fff',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // textIn: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   width: '70%',
  //   padding: 10
  // },
  // listItem: {
  //   padding: 10,
  //   backgroundColor: '#ccc',
  //   borderColor: 'black',
  //   borderWidth: 1
  // }
});
