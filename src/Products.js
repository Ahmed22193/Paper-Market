import { useState } from 'react';
import './PRODUCT.css';

export default function Products() {
    const [cart, setCart] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // لحفظ المنتجات اللي يتم تصفيتها

    const products = [
        { id: 1,type:'cups', name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 2,type:'roll', name: 'رول ورق زبدة', price: '199 LE', image: `${process.env.PUBLIC_URL}/imgs/foilepaper.jpg` },
        { id: 3,type:'handBag', name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 4,type:'roll', name: 'ورق متعدد الاستخدامات', price: '65 LE', image: `${process.env.PUBLIC_URL}/imgs/porgerpaper.jpg` },
        { id: 5,type:'handBag', name: 'ورق تغليف المنتجات', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/Vegitaplepaper.jpg` },
        { id: 6,type:'cups', name: 'اكواب رمضانية حجم 6.5', price: '100 LE', image: `${process.env.PUBLIC_URL}/imgs/whiteCups.jpg` },
        { id: 7,type:'cups', name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 8,type:'roll', name: 'رول ورق زبدة', price: '199 LE', image: `${process.env.PUBLIC_URL}/imgs/foilepaper.jpg` },
        { id: 9,type:'handBag', name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 10,type:'roll', name: 'ورق متعدد الاستخدامات', price: '65 LE', image: `${process.env.PUBLIC_URL}/imgs/porgerpaper.jpg` },
        { id: 11,type:'handBag', name: 'ورق تغليف المنتجات', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/Vegitaplepaper.jpg` },
        { id: 12,type:'handBag', name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 13,type:'handBag', name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 14,type:'cups', name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 15,type:'cups', name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 16,type:'roll', name: 'ورق طباعة الفواتير', price: '100 LE', image: `${process.env.PUBLIC_URL}/imgs/paper_print.jpg` },
        { id: 17,type:'roll', name: 'ورق كتابة لزق', price: '50 LE', image: `${process.env.PUBLIC_URL}/imgs/paper_write.jpg` },
        { id: 18,type:'roll', name: 'روول ورق طباعة', price: '500 LE', image: `${process.env.PUBLIC_URL}/imgs/paper_roll.jpg` },
        
    ];  

    const addToCart = (product) => {
        let cart = localStorage.getItem('myCart')
            ? JSON.parse(localStorage.getItem('myCart'))
            : [];

        cart.push(product);
        setCart([...cart]);
        localStorage.setItem('myCart', JSON.stringify(cart));

        alert(`تم إضافة ${product.name} إلى العربة 🛒`);

        // إطلاق الحدث لتحديث العدد
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // ✅ دالة تصفية المنتجات عند الضغط على `<li>`
    const filterProducts = (type) => {
        if (type === "all") {
            setFilteredProducts(products);
        } else if(type === "cups"){
            setFilteredProducts(products.filter(e => e.type === "cups"));
        } else if(type === "roll"){
            setFilteredProducts(products.filter(e => e.type === "roll"));
        }else{
            setFilteredProducts(products.filter(e => e.type === "handBag"));
        }
    };
    const [activeItem, setActiveItem] = useState('all');

    const handleClick = (item) => {
        setActiveItem(item);
    };
    return( 
        <>
            <div className='category_of_products'>
                <ul>
                    <li className={activeItem === 'all' ? 'active' : ''} onClick={() => {
                        filterProducts("all");
                        handleClick("all");
                        }}>كل المنتجات</li>
                    <li className={activeItem === 'cups' ? 'active' : ''} onClick={() => {
                        filterProducts("cups");
                        handleClick("cups");
                        }}>اكواب</li>
                    <li className={activeItem === 'roll' ? 'active' : ''} onClick={() => {
                        filterProducts("roll");
                        handleClick("roll");
                        }}>روول تغليف</li>
                    <li className={activeItem === 'handBag' ? 'active' : ''} onClick={() => {
                        filterProducts("handBag");
                        handleClick("handBag");
                        }}>اكياس التسوق</li>
                </ul>
            </div>

            <div className='contentOfProduct'>
                {(filteredProducts.length > 0 ? filteredProducts : products).map((e, index) => (
                    <div key={index} className='PRODUCT'>
                        <div className='myimage' style={{ backgroundImage: `url(${e.image})` }}></div>
                        <h2>Name : {e.name}</h2>
                        <h3>Price : {e.price}</h3>
                        <button onClick={() => addToCart(e)}>Add To The Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
