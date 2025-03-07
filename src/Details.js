import './App.css';
export default function Details(){
    return(
        <div className="DetailsContainer">
            <div className='D1'>
                <h3>للتفاصيل والأستفسارات</h3>
                <h4>اتصل بنا عبر مواقع التواصل الاجتماعي الخاص بنا</h4>
            </div>
            <div className='D2'>
                <p className='F'>FaceBook <span><a href='https://www.facebook.com/share/168jrTj53p/'><button>الذهاب</button></a></span></p>
                <p className='W'>WhatsApp <span><a href='https://wa.me/201028340472'><button>مراسلة</button></a></span></p>

            </div>
        </div>
    )
}