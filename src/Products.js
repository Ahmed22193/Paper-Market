import { useState } from 'react';
import './PRODUCT.css';

export default function Products() {
    // eslint-disable-next-line no-unused-vars
    const [cart, setcart] = useState([]);
    const products = [
        { id: 1, name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 2, name: 'رول ورق زبدة', price: '199 LE', image: `${process.env.PUBLIC_URL}/imgs/foilepaper.jpg` },
        { id: 3, name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 4, name: 'ورق متعدد الاستخدامات', price: '65 LE', image: `${process.env.PUBLIC_URL}/imgs/porgerpaper.jpg` },
        { id: 5, name: 'ورق تغليف المنتجات', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/Vegitaplepaper.jpg` },
        { id: 6, name: 'اكواب رمضانية حجم 6.5', price: '100 LE', image: `${process.env.PUBLIC_URL}/imgs/whiteCups.jpg` }
    ];    

    const addToCart = (product) => {
        let cart = localStorage.getItem('myCart')
            ? JSON.parse(localStorage.getItem('myCart'))
            : [];

        cart.push(product);
        setcart([...cart]);
        localStorage.setItem('myCart', JSON.stringify(cart));

        alert(`تم إضافة ${product.name} إلى العربة 🛒`);

        // إطلاق الحدث لتحديث العدد
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const MYPRODUCTS = products.map((e, index) => (
        <div key={index} className='PRODUCT'>
            <div className='myimage' style={{ backgroundImage: `url(${e.image})` }}></div>
            <h2>Name : {e.name}</h2>
            <h3>Price : {e.price}</h3>
            <button onClick={() => addToCart(e)}>Add To The Cart</button>
        </div>
    ));

    return <div className='contentOfProduct'>{MYPRODUCTS}</div>;
}
