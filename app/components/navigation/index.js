import React from 'react'
import { Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

const Navigation = () => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>Header</Title>
    </Body>
    <Right />
  </Header>
)

export default Navigation;