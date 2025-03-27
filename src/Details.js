import { useState } from 'react';
import './App.css';

export default function Details() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendToWhatsApp = () => {
        if(name!=='' && email!=='' && message!==''){
            const phoneNumber = "201555414915"; // رقم الواتساب مع كود الدولة
            const text = `الاسم: ${name}%0Aالبريد الإلكتروني: ${email}%0Aالرسالة: ${message}`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
            window.open(whatsappURL, "_blank");
            setName('');
            setEmail('');
            setMessage('');
        }
        else{
            return alert('الرجاء ملء جميع الحقول');
        }
    };

    return (
        <div className="DetailsContainer">
            <div className='D1'>
                <h3>للتفاصيل والاستفسارات</h3>
                <h5>اتصل بنا عبر مواقع التواصل الاجتماعي الخاص بنا او اترك لنا رسالة</h5>
            </div>
            <div className='D2'>
                <p className='F'>FaceBook <span><a href='https://www.facebook.com/share/168jrTj53p/'><button>الذهاب</button></a></span></p>
                <p className='W'>WhatsApp <span><a href='https://wa.me/201555414915'><button>مراسلة</button></a></span></p>
                <p className='E'>Instagram <span><a href='http://www.instagram.com/papermarket69'><button>مراسلة</button></a></span></p>
                <p className='T'>Tiktok <span><a href='https://tiktok.com/@papermarket69'><button>مراسلة</button></a></span></p>
            </div>
            <div className='sendDetails'>
                <h3>للاستفسار والشكاوي قم بترك رسالة</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        required
                        type='text' 
                        placeholder='الاسم' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        required
                        type='email' 
                        placeholder='البريد الإلكتروني' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea 
                        required
                        placeholder='الرسالة' 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input className='btn' type='submit' value='ارسال' onClick={sendToWhatsApp}/>
                </form>
            </div>
        </div>
    );
}