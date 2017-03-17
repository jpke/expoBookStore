import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         ListView
       } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    console.log("props: ", this.props);
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.title !== r2.title}
    )
    this.state = {
      dataSource: dataSource
    }
  }


  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the BookStore</Text>
        <Text style={styles.subTitle}>Available Books</Text>
        <View style={styles.bookList}>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(this.props.books)}
            renderRow={(book) => {
              return (
                  <View>
                    <TouchableHighlight style={styles.rowContainer}
                        onPress={() => {
                          this.props.selectBook(book)
                          this.navigate('Order')
                        }}>
                      <View>
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text style={styles.bookAuthor}>{book.author}</Text>
                      </View>
                    </TouchableHighlight>
                    <View style={styles.separator}/>
                  </View>
                )}}
          />
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('OrderHistory')}>
            <Text style={styles.menuItem}>Orders</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('Admin')}>
            <Text style={styles.menuItem}>Admin</Text>
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
