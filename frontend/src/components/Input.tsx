import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import globalStyles from '../../globalStyles';

type Props = {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<any>>;
  styles?: Pick<TextInputProps, 'style'>;
  password?: boolean;
};

const Input = ({value, onChangeText, styles, password = false}: Props) => {
  const componentStyle = styles
    ? {...styles, ...globalStyles.input}
    : globalStyles.input;

  return (
    <TextInput
      style={componentStyle}
      {...{value, onChangeText}}
      secureTextEntry={password}
    />
  );
};

export default Input;
