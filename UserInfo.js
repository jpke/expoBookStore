import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
      email: this.props.userInfo.email
    };
  }

  navigate(routeName, option) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName,
        option: option
      });
    }
  }

  updateState(text, item) {
    item === 'firstName' && this.setState({firstName: text});
    item === 'lastName' && this.setState({lastName: text});
    item === 'email' && this.setState({email: text});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Customer Info</Text>
          <View>
            <TextInput style={styles.input}
              value={this.state.firstName}
              placeholder="First Name"
              onChangeText={(text) => this.updateState(text, 'firstName')}/>
            <TextInput style={styles.input}
              value={this.state.lastName}
              placeholder="Last Name"
              onChangeText={(text) => this.updateState(text, 'lastName')}/>
            <TextInput style={styles.input}
              value={this.state.email}
              placeholder="email"
              onChangeText={(text) => this.updateState(text, 'email')}/>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
              }, "UserInfo");
              this.navigate('AddressInfo', 'delivery');}
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
