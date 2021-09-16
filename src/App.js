import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

export default function App() {
    return (
        <div className="app">
            {/* <h1>Airbnb clone</h1> */}
            <Header />
            <Home />
            <Footer />
        </div>

        
    )
}
