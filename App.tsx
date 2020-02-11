import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenName } from './shared/enums/ScreenName.enum';
import { Home, QuickTab } from './screens';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={ScreenName.HomeScreen}
          component={Home}
          options={{title: 'Home Screen'}}
        />
        <Screen
          name={ScreenName.QuickTabScreen}
          component={QuickTab}
          options={{title: 'Quick Tab'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
