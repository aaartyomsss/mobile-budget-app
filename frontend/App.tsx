import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import LoginPage from './src/layouts/loginPage';
import ExpensesForm from './src/layouts/expensesForm';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 5,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ExpensesForm />
    </SafeAreaView>
  );
};

export default App;
