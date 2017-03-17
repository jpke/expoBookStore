import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.newBook.title,
      author: this.props.newBook.author
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
    item === 'title' && this.setState({title: text});
    item === 'author' && this.setState({author: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Admin</Text>
        <Text style={styles.subTitle}>Add to Available Books</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Add Book</Text>
          <View>
            <TextInput style={styles.input}
              value={this.state.firstName}
              placeholder="Title"
              onChangeText={(text) => this.updateState(text, 'title')}/>
            <TextInput style={styles.input}
              value={this.state.lastName}
              placeholder="Author"
              onChangeText={(text) => this.updateState(text, 'author')}/>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                title: this.state.title,
                author: this.state.author,
              }, "AdminAddBook");
              this.navigate('HomeScreen');}
          }>
            <Text style={styles.menuItem}>Add Book</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('HomeScreen')}>
            <Text style={styles.menuItem}>Back</Text>
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
  title: {
    fontSize: 25,
  },
  subTitle: {
    fontSize: 20
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
