import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Pizzaria232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Restaurante Shoarma SL!</Text>

      <Image
        source={{ uri: 'https://img.freepik.com/fotos-gratis/vista-de-um-delicioso-prato-de-shawarma_23-2151805406.jpg?semt=ais_hybrid&w=740' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Shawarma: a melhor refeição para matar a fome!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://minervafoods.com/wp-content/uploads/2022/12/kebab-3.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Shoarma de Cordeiro</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://minervafoods.com/wp-content/uploads/2022/12/img_6943foto_coxaomole.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Shoarma de Carne</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.minhareceita.com.br/app/uploads/2020/10/Shawarma-de-frango-G.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Shoarma de Frango</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://801ede62.delivery.rocketcdn.me/wp-content/uploads/2020/02/veganes-Schawarma-mit-Aubergine.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Shoarma Vegano </Text>
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

export default Pizzaria232n;
