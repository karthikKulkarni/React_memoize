import React from 'react';
import { View, Text } from 'react-native';

const ShowColor = ({ color }: { color: string }) => {
  console.log('re-rendered ShowColor component on color change');

  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{color}</Text>
    </View>
  );
};

export default React.memo(ShowColor);
