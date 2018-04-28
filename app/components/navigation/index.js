import React from 'react'
import { Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

const Navigation = () => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name='ios-arrow-back' />
      </Button>
    </Left>
    <Body>
      <Title>Jérémy Berthelier</Title>
    </Body>
    <Right />
  </Header>
)

export default Navigation;