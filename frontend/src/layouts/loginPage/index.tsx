import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import Input from '../../components/Input';
import {styles} from './assets/styles';
import Button from '../../components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (): void => {
    console.log('----------------------------');
    console.log(username, password);
    console.log('----------------------------');
  };

  return (
    <View>
      <View style={styles.containers}>
        <Text>Username</Text>
        <Input value={username} onChangeText={setUsername} />
      </View>
      <View style={styles.containers}>
        <Text>Password</Text>
        <Input value={password} onChangeText={setPassword} password />
      </View>
      <View style={styles.containers}>
        <Button onClick={handleLogin} text="Login" />
      </View>
    </View>
  );
};

export default LoginPage;
