import React from 'react';
import {Button as NativeButton, GestureResponderEvent} from 'react-native';
import globalStyles from '../../globalStyles';

type Props = {
  text: string;
  onClick: (event: GestureResponderEvent) => void;
  styles?: Object;
};

const Button = ({text, onClick, styles}: Props) => {
  const componentStyles = styles
    ? {...styles, ...globalStyles.button}
    : globalStyles.button;

  return (
    <NativeButton title={text} onPress={onClick} style={componentStyles} />
  );
};

export default Button;
