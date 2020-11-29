import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Drawer, Title } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView>
            <Drawer.Section style={{ alignItems: 'center' }}>
                <Avatar.Image
                    size={80}
                    source={{
                        uri: 'https://ui-avatars.com/api/?size=80',
                        method: 'GET'
                    }}
                    style={{ marginVertical: '10%' }}
                />
                <Title>Michele Silva</Title>
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon="star"
                    label="Primeiro item"
                />
                <Drawer.Item
                    icon="camera"
                    label="Segundo item"
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
};

export default DrawerContent;
