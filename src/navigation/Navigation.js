import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoritesNavigation from './FavoritesNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Account" component={AccountNavigation} options={{
              tabBarLabel: 'Mi cuenta',
              tabBarIcon: () => <Icon name='user' color='#000' size={17} />,
          }} />
          <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
              tabBarLabel: '',
              tabBarIcon: () => renderPokeball(),
          }} />
          <Tab.Screen name="Favorites" component={FavoritesNavigation} options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: () => <Icon name='heart' color='#000' size={17} />,
          }} />
      </Tab.Navigator>
  )
}

function renderPokeball() {
    return ( 
        <Image 
            source={require('../assets/pokeball.png')}
            style={{ width: 70, height: 70, top: -10 }} 
        />
    )
}