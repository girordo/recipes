import React from 'react';
import { KeyboardAvoidingView, Platform, Image, ScrollView, Text, View } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import styles from './styles';

export default function Login({ navigation }) {
  const onLoginButtonPress = () => {
    navigation.navigate('Dashboard');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Card style={{ backgroundColor: 'transparent' }}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Text>Entre com suas credenciais</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#FF7600' } }}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#c4c4c4"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              // value={email}
              // onChangeText={(email) => setEmail(email)}
              left={
                <TextInput.Icon
                  name="email"
                  color="#c4c4c4"
                  style={{ marginRight: 14, marginTop: 10 }}
                />
              }
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#FF7600' } }}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor="#c4c4c4"
              // value={password}
              // onChangeText={(password) => setPassword(password)}
              left={
                <TextInput.Icon
                  name="lock"
                  color="#c4c4c4"
                  style={{ marginRight: 14, marginTop: 10 }}
                />
              }
            />
          </View>
          <Button
            onPress={() => onLoginButtonPress()}>
            <Text style={styles.textButton}>Entrar</Text>
          </Button>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
}
