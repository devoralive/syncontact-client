import React from 'react'
import { StackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

class ContactList extends React.Component {
  static navigationOptions = {
    title: 'Mes contacts',
  };

  render() {
    const filterBeginWith = (letter, element) => {
      if (element.last_name.toLowerCase().charAt(0) === letter) {
        return element
      }
    }

    const users = [
      { "id": 1, "first_name": "Marielle", "last_name": "Allpower", "job_title": "Ebeniste", "job_compagny": "Ateliers des 4 mains"},
      { "id": 2, "first_name": "Welch", "last_name": "Alcapone", "job_title": "Dealer d'herbe à chat", "job_compagny": "La rue"},
      { "id": 3, "first_name": "Kay", "last_name": "Altère", "job_title": "Champion Olympique de ronflette", "job_compagny": "Association des 42"},
      { "id": 4, "first_name": "Jérémy", "last_name": "Berthelier", "job_title": "Développeur web", "job_compagny": "Assurinco"},
      { "id": 5, "first_name": "Darrelle", "last_name": "Blondin", "job_title": "Professeur en mathématique", "job_compagny": "Collège des petits nains"},
      { "id": 6, "first_name": "Pavla", "last_name": "Bernard", "job_title": "Philosophe des temps anciens", "job_compagny": "Sous l'océan"}
    ]
    
    const alpha = "abcdefghijklmnopqrstuvwxyz"

    alpha.split("").map( (letter) => {
      let group = users.filter(filterBeginWith.bind(this, letter))
    })


    return (
      <Container>
        <Content>
          <List>
            {alpha.split("").map( (letter) => {
              let group = users.filter(filterBeginWith.bind(this, letter))
              return (
                <View key={letter}>
                  <ListItem itemDivider><Text>{letter.toUpperCase()}</Text></ListItem>
                  {group.map( (contact) => 
                    <ListItem key={contact.id}>
                      <Text
                        onPress={() => 
                          this.props.navigation.navigate('Details', {id: contact.id})
                        }>{contact.last_name} {contact.first_name}</Text>
                    </ListItem>)}
                </View>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

export default ContactList;