import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../TabsTypes/styles';
export default function TabsTypes({ translateY }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Primeiro item</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Segundo item</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Terceiro item</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Quarto item</Text>
        </View>
      </ScrollView>
    </View>
  )
}