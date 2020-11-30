import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Searchbar, Title } from 'react-native-paper';
import TabsTypes from '../../components/TabsTypes/index';
import TabsRecommended from '../../components/TabsRecommended';


export default function Dashboard({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '4%' }}>
                <Title style={{ marginHorizontal: '4%' }}>Olá Michele</Title>
                <TouchableOpacity
                    style={{ marginLeft: '54%' }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Avatar.Image
                        size={24}
                        source={{
                            uri: 'https://ui-avatars.com/api/?name=Michele+Silva',
                            method: 'GET'
                        }}
                    />
                </TouchableOpacity>
            </View>
            <Searchbar
                placeholder="Procure sua próxima receita"
                style={{ marginHorizontal: '4%', marginVertical: '4%' }}
            />
            <TabsTypes />
            <Title style={{ marginHorizontal: '4%', marginVertical: '4%' }}>Recomendamos a você</Title>
            <TabsRecommended />
        </ScrollView>
    );
}
