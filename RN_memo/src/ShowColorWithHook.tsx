/* eslint-disable no-console */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const ShowColorWithHook = ({ colors }: { colors: string[] }) => {
  const [color, setColor] = useState(colors[0]);

  const getColor = useCallback(() => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }, [colors]);

  const renderMomoizedColorView = useMemo(() => {
    console.log('ShowColorWithHook re-rendering on color change');
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
  }, [color]);

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
      }}>
      {renderMomoizedColorView}
      <Button
        title="Change palett Color"
        onPress={() => {
          setColor(getColor());
        }}
      />
    </View>
  );
};

export default ShowColorWithHook;
