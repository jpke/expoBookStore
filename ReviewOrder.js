import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedBook}>
          <Text style={styles.title}>Review Order</Text>
            <View style={styles.selectedBook}>
              <Text style={styles.bookTitle}>{this.props.bookToOrder.title}</Text>
              <Text style={styles.bookAuthor}>{this.props.bookToOrder.author}</Text>
            </View>
            <View>
              <Text>Payment Information</Text>
              <Text>{this.props.creditCardInfo.nameOnCard}</Text>
              <Text>{this.props.creditCardInfo.cardNumber}</Text>
              <Text>{this.props.creditCardInfo.securityCode}</Text>
            </View>
            <View>
              <Text>{this.props.useDeliveryAddressAsBilling ? "Billing and Delivery Address" : "Billing Address"}</Text>
              <Text>{this.props.billingAddress.lineOne}</Text>
              <Text>{this.props.billingAddress.lineTwo && this.props.billingAddress.lineTwo}</Text>
              <Text>{this.props.billingAddress.city}</Text>
              <Text>{this.props.billingAddress.state}</Text>
              <Text>{this.props.billingAddress.zip}</Text>
            </View>
            {!this.props.useDeliveryAddressAsBilling &&
              <View>
                <Text>Delivery Address</Text>
                {console.log(this.props.deliveryAddress)}
                <Text>{this.props.deliveryAddress.lineOne}</Text>
                <Text>{this.props.deliveryAddress.lineTwo && this.props.deliveryAddress.lineTwo}</Text>
                <Text>{this.props.deliveryAddress.city}</Text>
                <Text>{this.props.deliveryAddress.state}</Text>
                <Text>{this.props.deliveryAddress.zip}</Text>
              </View>
            }
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo(this.props.bookToOrder, 'SubmitOrder');
              this.navigate('OrderHistory');}
          }>
            <Text style={styles.menuItem}>Submit Order</Text>
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
  },
  title: {
    fontSize: 35,
    color: 'orange'
  },
  bookTitle: {
    fontSize: 20,
    padding: 5,
    marginTop: 15
  },
  bookAuthor: {
    fontSize: 18,
    padding: 5,
    marginBottom: 15
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
