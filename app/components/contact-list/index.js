import React from 'react'
import { StackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

class ContactList extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text 
                onPress={() => this.props.navigation.navigate('Details')}
              >
                Jérémy Berthelier
              </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default ContactList;