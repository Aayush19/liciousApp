/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Route from './src/route/index';
import { store, persistor } from './src/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Route />
       </PersistGate>
     </Provider>
  );
}


export default App;
