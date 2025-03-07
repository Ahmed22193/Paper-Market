import { useState, useEffect } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    const getCart = () => {
        const storedCart = localStorage.getItem('myCart');
        setCart(storedCart ? JSON.parse(storedCart) : []);
    };

    useEffect(() => {
        getCart();

        // تحديث الكارت لما يحصل تعديل
        window.addEventListener('cartUpdated', getCart);

        return () => window.removeEventListener('cartUpdated', getCart);
    }, []);

    const deleteFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('myCart', JSON.stringify(updatedCart));

        alert('تم حذف العنصر من العربة 🗑️');

        // إطلاق الحدث لتحديث العدد
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, '')); // استخراج الرقم فقط
            return total + price;
        }, 0);
    };

    return (
        <div className='ContainerOfCart'>
            <div className='contentOfProduct'>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className='PRODUCT'>
                            <div className='myimage' style={{ backgroundImage: `url(${item.image})` }}></div>
                            <h2>Name : {item.name}</h2>
                            <h3>Price : {item.price}</h3>
                            <button onClick={() => {
                                const confirmDelete = window.confirm(`هل تريد حذف ${item.name} من العربة؟`);
                                if (confirmDelete) {
                                    deleteFromCart(index);
                                } else {
                                    alert('تم الإلغاء');
                                }
                            }}>
                                Delete From Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='EmptyCart'>العربة فارغة 🛒</p>
                )}
            </div>
            <div className='GetTotalPrice'>
                {cart.length > 0 && (
                    <div className='cart_summary'>
                        <h3>إجمالي السعر : {getTotalPrice()} جنية</h3>
                        <button onClick={() => alert("جاري تنفيذ الطلب!")}>تنفيذ الطلب</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
