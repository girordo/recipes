import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Routes />
        </>
    );
}
