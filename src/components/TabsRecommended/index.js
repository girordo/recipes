import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import styles from './styles';

export default function TabsRecommmended({ translateY }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Primeiro item</Text>
            <Title>Primeiro Prato</Title>
          </View>
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