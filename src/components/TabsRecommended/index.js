import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';

export default function TabsRecommmended({ translateY }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={200}
      >
        <View style={styles.tabItem}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Text style={styles.tabText}>Primeiro item</Text>
            <Title style={styles.title}>Primeiro Prato</Title>
          </ImageBackground>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Segundo item</Text>
          <Title>Segundo Prato</Title>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Terceiro item</Text>
          <Title>Terceiro Prato</Title>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Quarto item</Text>
          <Title>Quarto Prato</Title>
        </View>
      </ScrollView>
    </View>
  )
}