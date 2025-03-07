import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import ShoppingCart from './ShoppingCart';
import Details from './Details';
import Products from './Products';
function App() {
    const [Currentpage, setCurrentpage] = useState('home');
    const [cartCount, setCartCount] = useState(0);
    const handleCountOfCart = () => {
        const myCart = localStorage.getItem('myCart');
        setCartCount(myCart ? JSON.parse(myCart).length : 0);
    };
    useEffect(() => {
        handleCountOfCart();

        window.addEventListener('cartUpdated', handleCountOfCart);

        return () => window.removeEventListener('cartUpdated', handleCountOfCart);
    }, []);
    const renderpage = () => {
        switch (Currentpage) {
            case 'home': return <MainPage />;
            case 'ShoppingCart': return <ShoppingCart />;
            case 'details': return <Details />;
            case 'products': return <Products />;
            default: return <MainPage />;
        }
    };
    return (
        <div className="App">
            <NavBar setCurrentpage={setCurrentpage} count={cartCount} />
            <section className='MainPage'>
                {renderpage()}
            </section>
        </div>
    );
}

export default App;
