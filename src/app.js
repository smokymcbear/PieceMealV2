import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { MyHeader, Button, Card, SearchBar } from './components/common';


class App extends Component {

  render() {
    return (
      <View>
        <Container>
          <SearchBar />
        </Container>
      </View>
    );
  }
}

export default App;
