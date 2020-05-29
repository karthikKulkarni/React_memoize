/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, Text, StatusBar, Button } from 'react-native';
import ShowColor from './ShowColor';
import ShowColorWithHook from './ShowColorWithHook';

type Colors = string[];
type State = {
  color: string;
};

class App extends React.Component {
  colors: Colors = ['#F87060', '#B3E9C7'];

  state: State = {
    color: '',
  };

  constructor(props: any) {
    super(props);
    this.state.color = this.getColor();
  }

  getColor = () => {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  };

  render() {
    const { color } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                margin: 20,
                justifyContent: 'space-evenly',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text style={{ alignSelf: 'center' }}>Class component</Text>
              <ShowColor color={color} />
              <Button
                title="Change palett Color"
                onPress={() => {
                  this.setState({ color: this.getColor() });
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                margin: 20,
                justifyContent: 'space-around',
                paddingTop: 20,
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text style={{ alignSelf: 'center' }}>
                Functional component using Hook
              </Text>
              <ShowColorWithHook colors={this.colors} />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
