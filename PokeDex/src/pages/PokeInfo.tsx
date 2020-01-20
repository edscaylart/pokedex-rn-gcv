import React, { useState, useEffect, useMemo } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

// const pokemon = {
//   id: 4,
//   name: "charmander",
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: "fire",
//         url: "https://pokeapi.co/api/v2/type/10/"
//       }
//     }
//   ]
// };

interface PokeType {
  name: string;
  url: string;
}

interface SlotTypes {
  slot: Number;
  type: PokeType;
}

interface Pokemon {
  id: Number;
  name: string;
  types: SlotTypes[];
}

const TYPES = {
  normal: "#a8a878",
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c851",
  electric: "#f8d031",
  ice: "#98d8d8",
  ground: "#e0c068",
  flying: "#a890f0",
  poison: "#a040a0",
  fighting: "#c03028",
  psychic: "#f85888",
  dark: "#705848",
  rock: "#b8a038",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0",
  dragon: "#7038f8",
  fairy: "#ffaec9"
};

export default function PokeInfo({ navigation }) {
  const [pokemon, setPokemon] = useState<Pokemon>(null);

  useEffect(() => {
    const data = navigation.getParam("pokemon");
    setPokemon(data);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{pokemon?.name}</Text>
        <Text style={styles.number}>{`#${pokemon?.id
          .toString()
          .padStart(3, "0")}`}</Text>
      </View>
      <View style={styles.rowTypes}>
        {pokemon?.types.map(tp => (
          <View
            key={String(tp.slot)}
            style={[styles.typeTag, { backgroundColor: TYPES[tp.type.name] }]}
          >
            <Text style={styles.typeText}>{tp.type.name}</Text>
          </View>
        ))}
      </View>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`
        }}
      />
      <Image
        style={styles.backgroundImg}
        resizeMode="contain"
        source={require("../../assets/pokebal.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7CCFDE",
    alignItems: "center"
  },
  img: {
    width: 263,
    height: 263
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  name: {
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },
  number: {
    fontSize: 16,
    textAlign: "right",
    color: "#fff"
  },
  backgroundImg: {
    position: "absolute",
    height: 160,
    width: 160,
    bottom: 0,
    right: 0,
    opacity: 0.07
  },
  rowTypes: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20
  },
  typeTag: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    margin: 5
  },
  typeText: {
    fontSize: 14,
    color: "#fff"
  }
});
