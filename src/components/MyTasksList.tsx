import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { useStyleContext } from '../contexts/stylesContext';

function FlatListHeaderComponent() {
  const {darkMode} = useStyleContext();

  return (
    <View>
      <Text style={[styles.header,{color:  darkMode ? '#E1E1E6': '#3D3D4D'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}


// backgroundColor:  darkMode ? '#282B5A': '#273FAD' ,

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const {darkMode} = useStyleContext();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={item.done ? [styles.taskButtonDone,{backgroundColor: darkMode ? 'rgba(65, 58, 111, 0.5)' : 'rgba(25, 61, 223, 0.1)'}] : styles.taskButton}
            onPress={()=> onPress(item.id)}
            onLongPress={()=> onLongPress(item.id)}
            //TODO - use onPress, onLongPress and style props DONE ALL 3
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? [styles.taskMarkerDone,{backgroundColor: darkMode ? '#9347CA' :  '#273FAD'}] : [styles.taskMarker,{borderColor: darkMode ? '#9347CA': '#3D3D4D'}]}
              //TODO - use style prop DONE
            />
            <Text
              style={ item.done ? [styles.taskTextDone,{color: darkMode ? 'rgba(225, 225, 230, 0.6)' :'#A09CB1'}] : {color:darkMode ? '#E1E1E6' : '#3D3D4D'}} 
              // style={ item.done ? (styles.taskTextDone,{color: darkMode ? 'rgba(225, 225, 230, 0.6)' :'#A09CB1'}) : styles.taskText} 
              //TODO - use style prop DONE
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    // color: '#3D3D4D',
    // {color:  darkMode ? '#E1E1E6': '#3D3D4D'} ,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    // {backgroundColor: darkMode ? 'rgba(65, 58, 111, 0.5)' : 'rgba(25, 61, 223, 0.1)'},
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    // backgroundColor: '#273FAD',
    marginRight: 10,

  },
  taskTextDone: {
    // {color: darkMode ? 'rgba(225, 225, 230, 0.6)' :'#A09CB1'},
    textDecorationLine: 'line-through'
  }
})