import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './src/pages/HomePage';
import GPSPage from './src/pages/GPSPage';
import QRPage from './src/pages/QRPage';
import SensorsPage from './src/pages/SensorsPage';
import FileUploadPage from './src/pages/FileUploadPage'; // Importa la nueva página

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="GPS"
          component={GPSPage}
          options={{
            tabBarLabel: 'GPS',
            tabBarIcon: ({ color }) => <Ionicons name="location-outline" color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="QR"
          component={QRPage}
          options={{
            tabBarLabel: 'QR',
            tabBarIcon: ({ color }) => <Ionicons name="qr-code-outline" color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="Sensors"
          component={SensorsPage}
          options={{
            tabBarLabel: 'Sensores',
            tabBarIcon: ({ color }) => <Ionicons name="analytics-outline" color={color} size={24} />,
          }}
        />
        <Tab.Screen
          name="Upload"
          component={FileUploadPage}
          options={{
            tabBarLabel: 'Subir',
            tabBarIcon: ({ color }) => <Ionicons name="cloud-upload" color={color} size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
