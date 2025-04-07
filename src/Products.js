import { useState } from 'react';
import './PRODUCT.css';

export default function Products() {
    const [cart, setCart] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // لحفظ المنتجات اللي يتم تصفيتها

    const products = [
        { id: 1,type:'cups', name: 'اكواب ورق 12 اونز', price: '125 LE', image: `${process.env.PUBLIC_URL}/imgs/cups.jpg` },
        { id: 2,type:'roll', name: 'رول ورق زبدة', price: '199 LE', image: `${process.env.PUBLIC_URL}/imgs/foilepaper.jpg` },
        { id: 3,type:'other', name: 'اكياس يد للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/marketpaper.jpg` },
        { id: 4,type:'roll', name: 'ورق متعدد الاستخدامات', price: '65 LE', image: `${process.env.PUBLIC_URL}/imgs/porgerpaper.jpg` },
        { id: 5,type:'other', name: 'اكياس ورق للتسوق', price: '99 LE', image: `${process.env.PUBLIC_URL}/imgs/Vegitaplepaper.jpg` },
        { id: 7,type:'cups', name: 'اكواب قهوة ورقية', price: '60 LE', image: `${process.env.PUBLIC_URL}/imgs/paperCups8ons.jpg` },
        { id: 8,type:'cups', name: 'اكواب رمضانية حجم 6.5', price: '100 LE', image: `${process.env.PUBLIC_URL}/imgs/whiteCups.jpg` },
        { id: 9,type:'cups', name: 'اكواب ورقية متعددة الاستخدام', price: '10 LE', image: `${process.env.PUBLIC_URL}/imgs/paperCups.jpg` },
        { id: 10,type:'cups', name: 'اكواب قهوة عالية الجودة', price: '120 LE', image: `${process.env.PUBLIC_URL}/imgs/coffeCups.jpg` },
        { id: 11,type:'cups', name: 'كوب قهوة صغير', price: '10 LE', image: `${process.env.PUBLIC_URL}/imgs/coffeCupPaper.jpg` },
        { id: 12,type:'cups', name: 'اكواب قهوة مميزة', price: '80 LE', image: `${process.env.PUBLIC_URL}/imgs/coffeCup3.jpg` },
        { id: 13,type:'roll', name: 'رول تغليف بني ورقي للتغليف', price: '30 LE', image: `${process.env.PUBLIC_URL}/imgs/brownRoll.jpg` },
        { id: 14,type:'roll', name: 'ورق تغليف الهدايا', price: '40 LE', image: `${process.env.PUBLIC_URL}/imgs/rollGift.jpg` },
        { id: 15,type:'roll', name: 'ورق تغليف علي شكل جرايد', price: '40 LE', image: `${process.env.PUBLIC_URL}/imgs/newspaperRoll.jpg` },
        { id: 16,type:'roll', name: 'ورق تغليف مزغرف', price: '100 LE', image: `${process.env.PUBLIC_URL}/imgs/RollPaperIMp.jpg` },
        { id: 17,type:'roll', name: 'ورق تغليف وتزيين ملون', price: '200 LE', image: `${process.env.PUBLIC_URL}/imgs/multiColorRollPaper.jpg` },
        { id: 18,type:'other', name: 'مناديل فاين', price: '50 LE', image: `${process.env.PUBLIC_URL}/imgs/fine.jpg` },
        { id: 19,type:'other', name: 'عبوة مناديل ناعمة فاين', price: '40 LE', image: `${process.env.PUBLIC_URL}/imgs/bigFine2.jpg` },
        { id: 20,type:'other', name: 'اربع قطع مناديل فاين', price: '60 LE', image: `${process.env.PUBLIC_URL}/imgs/bigFine3.jpg` },
        { id: 21,type:'other', name: 'علبة مناديل سحب فاين', price: '30 LE', image: `${process.env.PUBLIC_URL}/imgs/bigFine.jpg` },
        { id: 22,type:'other', name: 'A4 ورق طباعة', price: '200 LE', image: `${process.env.PUBLIC_URL}/imgs/A4paper.jpg` }
        
        
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
            setFilteredProducts(products.filter(e => e.type === "other"));
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
                    <li className={activeItem === 'other' ? 'active' : ''} onClick={() => {
                        filterProducts("other");
                        handleClick("other");
                        }}>منتجات اخرى</li>
                </ul>
            </div>

            <div className='contentOfProduct'>
                {(filteredProducts.length > 0 ? filteredProducts : products).map((e, index) => (
                    <div key={index} className='PRODUCT'>
                        <div className='myimage' style={{ backgroundImage: `url(${e.image})` }}></div>
                        <h2>{e.name}</h2>
                        <h3>Price : {e.price}</h3>
                        <button onClick={() => addToCart(e)}>Add To The Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
