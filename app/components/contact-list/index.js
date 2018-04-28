import React from 'react'
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

class ContactList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Page d'accueil : Liste des contacts</Text>
        <Button
          title="Jérémy Berthelier"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default ContactList;