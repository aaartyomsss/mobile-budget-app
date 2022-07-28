import React, {useState} from 'react';
import {View} from 'react-native';
import Input from 'components/Input';
import Text from 'components/Text';
import Button from 'components/Button';

const ExpensesForm = () => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const addExpense = () => {
    console.log(name, amount);
  };

  return (
    <View>
      <Text>Name</Text>
      <Input value={name} onChangeText={setName} />
      <Text>Amount</Text>
      <Input value={amount} onChangeText={setAmount} />
      <Button text="add" onClick={addExpense} />
    </View>
  );
};

export default ExpensesForm;
