import React from 'react'
import { Image, View, Dimensions } from 'react-native'
import { Container, Content, Text, H1, Button, Icon } from 'native-base';
import FlexImage from 'react-native-flex-image';

const { height, width} = Dimensions.get("window")

const users = [
  { "id": 1, "first_name": "Marielle", "last_name": "Allpower", "job_title": "Ebeniste", "job_compagny": "Ateliers des 4 mains"},
  { "id": 2, "first_name": "Welch", "last_name": "Alcapone", "job_title": "Dealer d'herbe à chat", "job_compagny": "La rue"},
  { "id": 3, "first_name": "Kay", "last_name": "Altère", "job_title": "Champion Olympique de ronflette", "job_compagny": "Association des 42"},
  { "id": 4, "first_name": "Jérémy", "last_name": "Berthelier", "job_title": "Développeur web", "job_compagny": "Assurinco"},
  { "id": 5, "first_name": "Darrelle", "last_name": "Blondin", "job_title": "Professeur en mathématique", "job_compagny": "Collège des petits nains"},
  { "id": 6, "first_name": "Pavla", "last_name": "Bernard", "job_title": "Philosophe des temps anciens", "job_compagny": "Sous l'océan"}
]

class ContactCard extends React.Component {
  static navigationOptions = {
    title: 'Jérémy Berthelier',
  };

  render() {
    /* Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    const contact = users.find((user) => user.id === id)

    const imagesProfil = [
      require(`../../assets/image/profil-1.jpg`),
      require(`../../assets/image/profil-2.jpg`),
      require(`../../assets/image/profil-3.jpg`),
      require(`../../assets/image/profil-4.jpg`),
      require(`../../assets/image/profil-5.jpg`),
      require(`../../assets/image/profil-6.jpg`)
    ]

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
            source={imagesProfil[contact.id - 1]}            
          />
        </View>

        <View 
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center"
          }}
        >
          <H1>{contact.first_name} {contact.last_name}</H1>
          <Text>Travaille à : {contact.job_compagny}</Text>
          <Text>{contact.job_title}</Text>
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