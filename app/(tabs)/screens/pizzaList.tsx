// app/(tabs)/screens/pizzaRestaurantes.tsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const pizzaPlaces = [
  { id: '1', name: 'Pizzaria 232N' },
  { id: '2', name: 'Pizza Bonucci' },
  { id: '3', name: 'Steve Pizza' },
];

export default function PizzaRestaurantes() {
  const router = useRouter();

  const handlePress = (name: string) => {
    // Rota para a página de detalhes, passando o nome da pizzaria como parâmetro
    router.push({
      pathname: '/(tabs)/screens/pizza232n',
      params: { name },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes de Pizza</Text>
      <FlatList
        data={pizzaPlaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item.name)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});