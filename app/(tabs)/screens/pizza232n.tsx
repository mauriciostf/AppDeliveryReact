import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Pizzaria232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pizzaria 232N</Text>

      <Image
        source={{ uri: 'https://www.minhareceita.com.br/app/uploads/2022/12/Dpizza-de-pepperoni-caseira-portal-minha-receita.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>As melhores pizzas da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://laticiniosbomdestino.com.br/2016/wp-content/uploads/2023/03/pizza-marguerita-com-mozzarella-de-bufala-bom-destino-scaled.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Margherita</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F100a6d68b75dc08cd0a7e6680cd54bf887732918.png&w=1080&q=70' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Pepperoni</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Quatro Queijos</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Calabresa</Text>
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
