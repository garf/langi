import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Card from '../components/Card';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card word="der Tisch" translation="the table" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
