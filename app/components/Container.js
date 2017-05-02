import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

const Container = ({ backgroundColor, onPress, children }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{backgroundColor}</Text>
    </TouchableOpacity>
    {children}
  </View>
);

export default Container;
