import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Order extends React.Component {
  navigate(routeName) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedBook}>
          <Text style={styles.title}>Order</Text>
          <View>
            <Text style={styles.bookTitle}>{this.props.selectedTitle}</Text>
            <Text style={styles.bookAuthor}>{this.props.selectedAuthor}</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('UserInfo')}>
            <Text style={styles.menuItem}>Buy</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('OrderHistory')}>
            <Text style={styles.menuItem}>Order History</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('HomeScreen')}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selectedBook: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 200,
  },
  title: {
    fontSize: 25,
  },
  bookTitle: {
    fontSize: 20,
    padding: 5
  },
  bookAuthor: {
    fontSize: 15,
    padding: 5
  },
  menu: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6799FF',
    width: 250,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  }
});
