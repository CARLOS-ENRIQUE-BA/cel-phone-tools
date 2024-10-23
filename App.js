// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './src/pages/HomePage';
import GPSPage from './src/pages/GPSPage';
import QRPage from './src/pages/QRPage';
import SensorsPage from './src/pages/SensorsPage';
import AudioPage from './src/pages/AudioPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'GPS':
                iconName = 'location-outline';
                break;
              case 'QR':
                iconName = 'qr-code-outline';
                break;
              case 'Sensors':
                iconName = 'speedometer-outline';
                break;
              case 'Audio':
                iconName = 'mic-outline';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            height: 60,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen name="GPS" component={GPSPage} />
        <Tab.Screen name="QR" component={QRPage} />
        <Tab.Screen name="Home" component={HomePage} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Sensors" component={SensorsPage} />
        <Tab.Screen name="Audio" component={AudioPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
