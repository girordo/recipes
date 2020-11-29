import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawer.content';
import MainRoutes from './main.routes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerPosition="right"
            drawerStyle={{ backgroundColor: 'white' }}>
            <Drawer.Screen name="home" component={MainRoutes} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
