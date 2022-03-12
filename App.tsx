import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { loadAsync } from 'expo-font';
import { ScreenName } from './shared/enums/ScreenName.enum';
import { Home, QuickTab } from './screens';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({ 'nunito-extra-light': require('./assets/fonts/Nunito-ExtraLight.ttf') });
      setIsFontLoaded(true);
    }

    loadFonts();
  })

  return (
    isFontLoaded ? (
      <NavigationContainer>
        <Navigator>
          <Screen
            name={ScreenName.HomeScreen}
            component={Home}
            options={{title: 'Home Screen', headerShown: false}}
          />
          <Screen
            name={ScreenName.QuickTabScreen}
            component={QuickTab}
            options={{title: 'Quick Tab'}}
          />
        </Navigator>
      </NavigationContainer>
    ) : null
  );
}
