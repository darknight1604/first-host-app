/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppProvider from '@host-app/common/components/providers/app-provider';
import HomePage from '@host-app/screens/home';

const App = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default App;
