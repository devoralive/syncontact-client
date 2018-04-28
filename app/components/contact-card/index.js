import React from 'react'
import { Image, View, Dimensions } from 'react-native'
import { Container, Content, Text, H1, Button, Icon } from 'native-base';
import FlexImage from 'react-native-flex-image';

const { height, width} = Dimensions.get("window")

class ContactCard extends React.Component {
  static navigationOptions = {
    title: 'Jérémy Berthelier',
  };

  render() {
    return (
      <View 
        style={{
          flex: 1,
          height: height
        }}
      >
        <View 
          style={{
            flex: 2
          }}
        >
          <FlexImage
            source={require("../../assets/image/profil-img.jpg")}
          />
        </View>

        <View 
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center"
          }}
        >
          <H1>Jérémy Berthelier</H1>
          <Text>Travaille à : Assurinco</Text>
          <Text>Dévellopeur web</Text>
          <Button 
            rounded
            success
            style={{alignSelf:'center', marginTop: 10}}>
            <Icon name='ios-call' />
          </Button>
        </View>


      </View>
    )
  }
}

export default ContactCard;