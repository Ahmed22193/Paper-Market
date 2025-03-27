import { useState } from 'react';

export default function NavBar(props) {
    const [activeItem, setActiveItem] = useState('home');

    const handleClick = (item) => {
        setActiveItem(item);
    };
    return (
        <nav className="NavBar">
            <ul className="NavBar_list">
                <li className={activeItem === 'home' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('home');
                    handleClick('home');
                }}>الصفحة الرئيسية</li>
                <li className={activeItem === 'products' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('products');
                    handleClick('products');
                }}>المنتجات</li>
                <li className={activeItem === 'cart' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('ShoppingCart');
                    handleClick('cart');
                }}>
                    سلة المشتريات 🛒
                    {props.count > 0 && <span>({props.count})</span>}
                </li>
                <li className={activeItem === 'details' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('details');
                    handleClick('details');
                }}>الاستفسارات</li>
                <li className={activeItem === 'team' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('team');
                    handleClick('team');
                }}>من نحن</li>
                <h1 className="NavBar_Logo">Paper | Market</h1>
            </ul>
            <ul className="NavBar_list2">
                <p>◀</p>
                <h1 className="NavBar_Logo">Paper | Market</h1>
                <li className={activeItem === 'home' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('home');
                    handleClick('home');
                }}>الصفحة الرئيسية</li>
                <li className={activeItem === 'products' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('products');
                    handleClick('products');
                }}>المنتجات</li>
                <li className={activeItem === 'cart' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('ShoppingCart');
                    handleClick('cart');
                }}>
                    سلة المشتريات 🛒
                    {props.count > 0 && <span>({props.count})</span>}
                </li>
                <li className={activeItem === 'details' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('details');
                    handleClick('details');
                }}>الاستفسارات</li>
                <li className={activeItem === 'team' ? 'active' : ''} onClick={() => {
                    props.setCurrentpage('team');
                    handleClick('team');
                }}>من نحن</li>
            </ul>
        </nav>
    );
}
