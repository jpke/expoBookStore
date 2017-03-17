import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOnCard: this.props.creditCardInfo.nameOnCard,
      cardNumber: this.props.creditCardInfo.cardNumber,
      securityCode: this.props.creditCardInfo.securityCode
    };
  }

  navigate(routeName) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName
      });
    }
  }

  updateState(text, item) {
    item === 'nameOnCard' && this.setState({nameOnCard: text});
    item === 'cardNumber' && this.setState({cardNumber: text});
    item === 'securityCode' && this.setState({securityCode: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedBook}>
          <Text style={styles.title}>Credit Card Info</Text>
            <View>
              <TextInput style={styles.input}
                value={this.state.nameOnCard}
                placeholder="Name on Card"
                onChangeText={(text) => this.updateState(text, 'nameOnCard')}/>
              <TextInput style={styles.input}
                value={this.state.cardNumber}
                placeholder="Card Number"
                onChangeText={(text) => this.updateState(text, 'cardNumber')}/>
              <TextInput style={styles.input}
                value={this.state.securityCode}
                placeholder="Security Code"
                onChangeText={(text) => this.updateState(text, 'securityCode')}/>
            </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                nameOnCard: this.state.nameOnCard,
                cardNumber: this.state.cardNumber,
                securityCode: this.state.securityCode
              }, 'PaymentInfo');
              this.navigate('ReviewOrder');}
          }>
            <Text style={styles.menuItem}>Review Order</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
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
  input: {
    height: 50,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#6799FF',
    marginTop: 3,
    padding: 5,
    borderRadius: 5
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
