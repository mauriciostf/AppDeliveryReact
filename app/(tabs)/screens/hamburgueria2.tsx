import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Hamburgueria2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>KFC!!</Text>

      <Image
        source={{ uri: 'https://sergipenoticias.com/uploads/2024/07/15/noticias/35562.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Tão bom que é de lamber os dedos!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://kfc.alphacode.com.br/uploads/produtos/19.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Balde de Frango Mega</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://kfc.alphacode.com.br/uploads/produtos/50.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Crunch Salad</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://kfc.alphacode.com.br/uploads/produtos/22.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Kentucky Chiken Bbo</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://static.ifood-static.com.br/image/upload/t_high/pratos/bd75a81f-0315-488c-a187-db289f40164c/202503181102_7cmppn5pauj.png' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Coronel Júnior</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default Hamburgueria2;
