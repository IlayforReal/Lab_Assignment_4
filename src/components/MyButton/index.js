import React from 'react';
import { Button } from 'react-native-paper';

const MyButton = ({ text, action, mode, size }) => {
  let style = null;

  switch (size) {
    case 'small':
      style = { ...btnStyle.buttonSmall };
      break;
    case 'medium':
      style = { ...btnStyle.buttonMedium };
      break;
    case 'large':
      style = { ...btnStyle.buttonLarge };
      break;
    default:
      style = btnStyle.buttonMedium;
      break;
  }

  return (
    <Button
      contentStyle={style}
      mode={mode}
      onPress={() => action()}
      buttonColor="#4A628A" // Set the button color to #084C61
      textColor="#FFFFFF" // Ensure white text for contrast
    >
      {text}
    </Button>
  );
};

export default MyButton;

const btnStyle = {
  buttonSmall: {
    height: 50,
  },
  buttonMedium: {
    height: 60,
  },
  buttonLarge: {
    height: 70,
  },
};
