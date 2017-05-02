import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.dismissModal();
  };

  render() {
    return (
      <Container
        backgroundColor="#01446b"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen;
