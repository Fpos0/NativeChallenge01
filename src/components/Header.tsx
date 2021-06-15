import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/ionicons';
import { useStyleContext } from '../contexts/stylesContext';

export function Header() {
  const {toggleDarkMode,darkMode} = useStyleContext();

  return (
    <View style={[styles.header,{backgroundColor:  darkMode ? '#282B5A': '#273FAD'} ]}>
      <Text style={[styles.headerText,{color:  darkMode ? '#E1E1E6': '#FFF'}]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' },{color:  darkMode ? '#E1E1E6': '#FFF'}]}>do</Text>

    <TouchableOpacity style={styles.btnChangeStyle} onPress={toggleDarkMode}>
       <Text> {darkMode.toString()}</Text>
    </TouchableOpacity>
  </View>
  )
}
// darkMode ? backgroundColor:'#273FAD' : backgroundColor:'#282B5A'


// backgroundColor:  darkMode ? '#282B5A': '#273FAD' ,
const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    // {backgroundColor:  darkMode ? '#282B5A': '#273FAD'} ,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    // color:  darkMode ? '#E1E1E6': '#FFF' ,
    // color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  btnChangeStyle : {
    // paddingLeft: 24,
    alignContent: 'flex-end'
  }
});
