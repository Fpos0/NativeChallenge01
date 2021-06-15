import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import {StyleContextProvider} from './src/contexts/stylesContext'
export default function App() {
  return (
    <>
      <StyleContextProvider>
        <StatusBar 
          backgroundColor="transparent" 
          translucent 
          barStyle="light-content" 
        />
        <Home />
      </StyleContextProvider>
    </>
  );
}
