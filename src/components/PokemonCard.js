import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
    const { pokemon } = props;

    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`)
    }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
               <View style={bgStyles}>
                    <Text>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                    <Text style={styles.name}>{pokemon.name}</Text> 
                    <Image source={{ uri: pokemon.image }} style={styles.image} />
               </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: 130
    },
    spacing:{
        flex: 1,
        padding: 5
    },
    bgStyles:{
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    image:{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    name:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        paddingTop: 10
    }
})