import React from 'react';
import MainPage from './src'
import { Provider } from 'react-redux';
import { store, persistor } from './src/Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainPage />
            </PersistGate>
        </Provider>
    )
}