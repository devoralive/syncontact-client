/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Container, Content, Text } from 'native-base';

import Navigation from './app/components/navigation'
import ContactCard from './app/components/contact-card'

const App = () => (
  <Container>
    <Navigation />

    <Content>
      <ContactCard />
    </Content>
  </Container>
)

export default App;

