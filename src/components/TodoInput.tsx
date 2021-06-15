import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { useStyleContext } from '../contexts/stylesContext';

interface TodoInputProps {
  addTask: (task: string) => void;
}


export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const {darkMode} = useStyleContext();

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value 
    const newTask = task;
    addTask(newTask);
    setTask('');

  }
//darkMode ? {backgroundColor:'#E1E1E6'}: { backgroundColor:'#F5F4F8'}]

  return (
    <View style={[styles.inputContainer,{backgroundColor: darkMode ? '#413A6F':'#F5F4F8'},Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input,{backgroundColor: darkMode ? '#413A6F':'#F5F4F8'},{color: darkMode ? '#E1E1E6' : '#000000'}]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={darkMode ? '#E1E1E6' : '#A09CB1'}
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        value={task}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton,{backgroundColor: darkMode ? '#9347CA':  '#3FAD27'}]}
        onPress={handleAddNewTask}
        //TODO - onPress prop DONE
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: '#F5F4F8',
    // backgroundColor: darkMode ? '#413A6F':'#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    // backgroundColor: '#F5F4F8',
    // backgroundColor: darkMode ? '#413A6F' : '#F5F4F8',
    
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    // backgroundColor: '#3FAD27',
    // backgroundColor: darkMode ? '#9347CA':  '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});