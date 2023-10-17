import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./features/store.jsx";
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-glgsazw7j5moht2e.us.auth0.com"
        clientId="2QuA8SvrTbmrDxlT447suw224dWBnhu0"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>,
)
