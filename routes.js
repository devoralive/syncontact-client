import { StackNavigator } from 'react-navigation';
import ContactList from './app/components/contact-list'
import ContactCard from './app/components/contact-card'


const RootStack = StackNavigator(
  {
    Home: {
      screen: ContactList,
    },
    Details: {
      screen: ContactCard,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;