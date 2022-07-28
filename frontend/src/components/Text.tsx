import React from 'react';
import {Text as NativeText} from 'react-native';
import globalStyles from '../../globalStyles';

type Props = {
  children: string;
  styles?: Object;
  main?: boolean;
};

const Text = ({children, styles, main = true}: Props) => {
  const defaultStyle: Object = main
    ? globalStyles.mainFont
    : globalStyles.secondaryFont;

  const componentStyle = styles ? {...styles, ...defaultStyle} : defaultStyle;

  return <NativeText style={componentStyle}>{children}</NativeText>;
};

export default Text;
