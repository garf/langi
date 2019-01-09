import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  _getWordCard = () => {
    return this.state.opened ? null : (
      <View style={styles.card}>
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{this.props.word}</Text>
        </View>
      </View>
    );
  }

  _getTranslationCard = () => {
    return !this.state.opened ? null : (
      <View style={styles.cardOpened}>
        <View style={styles.translationContainer}>
          <Text style={styles.translation}>{this.props.translation}</Text>
        </View>
      </View>
    );
  }

  _flipCard = () => {
    this.setState(state => ({
      opened: !state.opened
    }));
  }

  render() {
    return (
      <TouchableOpacity onPress={this._flipCard}>
        <View>
          {this._getWordCard()}
          {this._getTranslationCard()}
        </View>
      </TouchableOpacity>
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
  card: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: '95%',
    padding: 20,
    aspectRatio: 1,
    backgroundColor: 'steelblue',
    shadowOffset: { width: 3,  height: 3, },
    shadowColor: '#555',
    shadowOpacity: 0.5,
  },
  wordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    textAlign: 'center',
    fontSize: 25,
    color: '#efefef',
    textShadowColor: '#111',
    textShadowRadius: 3,
    textShadowOffset: { width: 1, height: 1, }
  },
  cardOpened: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: '95%',
    padding: 20,
    aspectRatio: 1,
    backgroundColor: '#fefefe',
    shadowOffset: { width: 3,  height: 3, },
    shadowColor: '#555',
    shadowOpacity: 0.5,
  },
  translationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translation: {
    // textAlign: 'center',
    fontSize: 15,
    color: '#222',
  },
});

Card.propTypes = {
  word: PropTypes.string,
  translation: PropTypes.string,
};

export default Card;
