import React from 'react'
import App from './App'
import Home from './component/Home'
import Sobre from './component/Sobre'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'

const rounter = (
    <BrowserRouter>
        <div>
            <Header />
            <center>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/Github' component={App} />
            <Route path='/Sobre' component={Sobre} />
            </center>
        </div>    
    </BrowserRouter>
)

export default rounter;