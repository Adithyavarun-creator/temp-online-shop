import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider} from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
      <UserProvider>
<ProductsProvider>
    <FilterProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
</ProductsProvider>
</UserProvider>
</Auth0Provider>

, document.getElementById('root'))


//domain : comfystore.us.auth0.com
//client ID : LWj0grYWWw2MLNvdFfbNJsp0qmAjvmy8

//data comes from productsprovider, so it comes first

//username : tester@comfy.com
//password : Adithya95