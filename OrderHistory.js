import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         ListView
       } from 'react-native';
import formatAMPM from './dateFormatter';

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.title !== r2.title}
    )
    this.state = {
      dataSource: dataSource
    }
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
        <Text style={styles.title}>Order History</Text>
        <View style={styles.bookList}>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(this.props.orders)}
            renderRow={(order) => {
              return (
                <View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.bookTitle}>{order.title}</Text>
                    <Text style={styles.bookAuthor}>{order.author}</Text>
                    <Text style={styles.bookDate}>{"Ordered " + formatAMPM(order.date) + " on " + order.date.toDateString()}</Text>
                  </View>
                  <View style={styles.separator}/>
                </View>
                )}}
          />
        </View>
        <View style={styles.menu}>
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
  title: {
    fontSize: 25,
  },
  bookList: {
    height: 300,
    width: 300,
    justifyContent: 'space-between',
  },
  rowContainer: {
    padding: 5,
    backgroundColor: '#ffcd67',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  bookTitle: {
    fontSize: 15,
    padding: 5
  },
  bookAuthor: {
    fontSize: 12,
    padding: 5
  },
  bookDate: {
    fontSize: 12,
    padding: 5
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  menu: {
    height: 100,
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
