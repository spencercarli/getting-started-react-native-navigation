import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#F44336"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen;
