import './Team.css';
export default function Team() {
    return(
        <div className='container'>
            <div className='Team'>
                <div className='aboutUs'>
                    <h3>من نحن</h3>
                    <p>نحن في [Paper Market] نعمل على توفير أفضل أنواع الورق بجودة عالية وأسعار تنافسية. نهتم بتقديم حلول متكاملة تناسب احتياجات الأفراد والشركات، سواء للطباعة، التغليف، أو الاستخدامات المتعددة.</p>
                    <h2>اعضاء الفريق👤</h2>
                </div>
                <div className='card-content'>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>عبد الهادي رضا جابر لملوم</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>مصطفي محمد محمود محمود</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>ابراهيم محمد ابراهيم احمد</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>ابو اليزيد محمد رمضان عبدالأشول</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>ابراهيم محمد ابراهيم ابراهيم</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>أحمد عماد عبداللطيف عبدالله</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>احمد محمد ابراهيم محمد</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>احمد محمد احمدالأطير</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>احمد محمد احمد البربري</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/girl.jpg`} alt='ahmed' />
                        <h3>الاء محمد علي عبدالحي</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>احمد اسامة عادل سيد</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>احمد اشرف حامد احمد</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/girl.jpg`} alt='ahmed' />
                        <h3>فرح فتحي محمد العريني</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>محمد عبدالناصر طه العذب</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/girl.jpg`} alt='ahmed' />
                        <h3>هانم احمد سمير محمد احمد</h3>
                    </div>
                    <div className='card'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='ahmed' />
                        <h3>محمد راشد محمد السيد هراس</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}