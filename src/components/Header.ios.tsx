import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useStyleContext } from '../contexts/stylesContext';

const {toggleDarkMode,darkMode} = useStyleContext();

export function Header() {


  return (
    <View style={[styles.header,{backgroundColor:  darkMode ? '#282B5A': '#273FAD'} ]}>
      <Text style={[styles.headerText,{color:  darkMode ? '#E1E1E6': '#FFF'}]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>

      <TouchableOpacity style={styles.btnChangeStyle} onPress={toggleDarkMode}>
         <Text> {darkMode.toString()}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor:  darkMode ? '#282B5A': '#273FAD' ,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    color:  darkMode ? '#E1E1E6': '#FFF' ,
    fontSize: 24,
    // color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  btnChangeStyle : {
    alignContent: 'flex-end'
  }
});
