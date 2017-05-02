import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  render() {
    return (
      <Container
        backgroundColor="#F44336"
        onPress={() => console.log('press')}
      />
    );
  }
}

export default Screen;
