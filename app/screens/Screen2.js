import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  render() {
    return (
      <Container
        backgroundColor="#c95e0c"
        onPress={() => console.log('press')}
      />
    );
  }
}

export default Screen;
