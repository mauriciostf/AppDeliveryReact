import React from 'react';
// Importa a biblioteca React, essencial para criar componentes.

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// Importa componentes do React Native para estruturar e estilizar a interface.

import { Link } from 'expo-router';
// Importa o componente Link do Expo Router para navegar entre telas.

interface Restaurant {
  name: string;
  rating: number;
  image: string;
  distance: string;
}
// Define a estrutura (interface) de um restaurante com nome, nota, imagem e distância.

const restaurants: Restaurant[] = [
  {
    name: 'Pizzaria da 232N',
    rating: 4.5,
    image: 'https://i.pinimg.com/736x/e7/f9/4e/e7f94e4c4cb21215e25c9cb383d393a2.jpg',
    distance: '2 km',
  },
  {
    name: 'QiTemaki',
    rating: 4.8,
    image: 'https://static.ifood-static.com.br/image/upload/t_low/logosgde/201906071215_0fc5cf4e-8168-4329-9b30-adfd5a2a026e.png',
    distance: '2,1 km',
  },
  {
    name: 'KFC',
    rating: 4.7,
    image: 'https://gsobmidia.com.br/uploads/lojas/2104/kfc-logo_1678128805.png',
    distance: '2,9 km',
  },

  {
    name: 'Shoarma São Léo',
    rating: 4.5,
    image: 'https://static.ifood-static.com.br/image/upload/t_high/logosgde/3f432d84-bc15-4d32-a253-b7797301e4c3/202008031833_9k7h_.jpeg',
    distance: '3.5 km',
  },
];
// Cria um array de restaurantes com informações simuladas: nome, avaliação, imagem e distância.

const Restaurants: React.FC = () => {
  // Define o componente funcional Restaurants.

  return (
    <View style={styles.restaurants}>
      {/* Container principal do componente com padding e margem. */}

      <Text style={styles.title}>Restaurantes</Text>
      {/* Título da seção de restaurantes. */}

      {restaurants.map((restaurant, index) => {
        // Percorre o array de restaurantes, criando um card para cada item.

        const cardContent = (
          <View style={styles.restaurantCard}>
            {/* Card com layout em linha (imagem + informações). */}

            <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
            {/* Exibe a imagem do restaurante. */}

            <View style={styles.restaurantInfo}>
              {/* Container das informações do restaurante. */}

              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              {/* Nome do restaurante com estilo de destaque. */}

              <Text style={styles.restaurantDetails}>
                Avaliação: {restaurant.rating} | {restaurant.distance} de distância
              </Text>
              {/* Informações adicionais: avaliação e distância. */}
            </View>
          </View>
        );

        if (restaurant.name === 'Pizzaria da 232N') {
          // Verifica se o restaurante é a pizzaria específica para aplicar navegação.

          return (
            <Link href="/(tabs)/screens/pizza232n" asChild key={index}>
              {/* Envolve o botão com Link para navegar para a tela da pizzaria. */}
              <TouchableOpacity>{cardContent}</TouchableOpacity>
            </Link>
          );
        } else if (restaurant.name === 'QiTemaki'){
          return (
            <Link href="/(tabs)/screens/qiTemaki" asChild key={index}>
              {/* Envolve o botão com Link para navegar para a tela da pizzaria. */}
              <TouchableOpacity>{cardContent}</TouchableOpacity>
            </Link>
          );
        } else if (restaurant.name === 'KFC'){
          return (
            <Link href="/(tabs)/screens/hamburgueria2" asChild key={index}>
              {/* Envolve o botão com Link para navegar para a tela da pizzaria. */}
              <TouchableOpacity>{cardContent}</TouchableOpacity>
            </Link>
          );
        } else if (restaurant.name === 'Shoarma São Léo'){
          return (
            <Link href="/(tabs)/screens/shoarma" asChild key={index}>
              {/* Envolve o botão com Link para navegar para a tela da pizzaria. */}
              <TouchableOpacity>{cardContent}</TouchableOpacity>
            </Link>
          );
        }

        return (
          <TouchableOpacity key={index}>
            {/* Para os outros restaurantes, apenas exibe o card clicável (sem navegação). */}
            {cardContent}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  // Define os estilos visuais com StyleSheet, forma recomendada no React Native.

  restaurants: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  // Espaçamento lateral e vertical para a seção de restaurantes.

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  // Estilo do título: tamanho grande, peso médio, cor escura e centralizado.

  restaurantCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  // Card com fundo branco, sombra e cantos arredondados, disposto em linha.

  restaurantImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  // Estilo da imagem: quadrada e com bordas levemente arredondadas.

  restaurantInfo: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  // Container de texto com padding, usa flex para ocupar o espaço restante e centraliza verticalmente.

  restaurantName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e74c3c',
  },
  // Nome do restaurante em vermelho escuro e negrito.

  restaurantDetails: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  // Detalhes com texto cinza, menor e com espaçamento superior.
});

export default Restaurants;
// Exporta o componente Restaurants para ser utilizado em outras partes do app.
