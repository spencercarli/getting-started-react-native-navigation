import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

export default () => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen1',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon1_selected.png'),
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'Screen2',
        icon: require('./images/icon2.png'),
        selectedIcon: require('./images/icon2_selected.png'),
        title: 'Screen Two'
      }
    ]
  });
};
