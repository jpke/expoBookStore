import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         Switch,
         View
       } from 'react-native';

export default class AddressInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineOne: this.props.address.lineOne,
      lineTwo: this.props.address.lineTwo,
      city: this.props.address.city,
      state: this.props.address.state,
      zip: this.props.address.zip,
      useAsBilling: this.props.addressType === 'Billing' ? true : false
    };
  }

  navigate(routeName, option) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName,
        option
      });
    }
  }

  updateState(text, item) {
    item === 'lineOne' && this.setState({lineOne: text});
    item === 'lineTwo' && this.setState({lineTwo: text});
    item === 'city' && this.setState({city: text});
    item === 'state' && this.setState({state: text});
    item === 'zip' && this.setState({zip: text});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>{this.props.addressType + " address"}</Text>
          <View>
            <TextInput style={styles.input}
              value={this.state.lineOne}
              placeholder="Address Line One"
              onChangeText={(text) => this.updateState(text, 'lineOne')}/>
            <TextInput style={styles.input}
              value={this.state.lineTwo}
              placeholder="Address Line Two"
              onChangeText={(text) => this.updateState(text, 'lineTwo')}/>
            <TextInput style={styles.input}
              value={this.state.city}
              placeholder="City"
              onChangeText={(text) => this.updateState(text, 'city')}/>
            <TextInput style={styles.input}
              value={this.state.state}
              placeholder="State"
              onChangeText={(text) => this.updateState(text, 'state')}/>
            <TextInput style={styles.input}
              value={this.state.zip}
              placeholder="Zip"
              onChangeText={(text) => this.updateState(text, 'zip')}/>
            {this.props.addressType === 'Delivery' &&
              <View styles={styles.switchContainer}>
                <Text style={styles.switchLabel}>
                  Use As Billing Address?
                </Text>
                <Switch onValueChange={(value) => this.setState({useAsBilling: value})}
                  value={this.state.useAsBilling}
                />
              </View>}
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                lineOne: this.state.lineOne,
                lineTwo: this.state.lineTwo,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
              }, this.props.addressType, this.state.useAsBilling);
              this.navigate(this.state.useAsBilling ? 'PaymentInfo' : 'AddressInfo');}
          }>
            <Text style={styles.menuItem}>Next</Text>
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
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
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
