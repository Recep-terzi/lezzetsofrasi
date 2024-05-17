import React from 'react'
import './CreativeInfo.Module.css'
import menuIcon from '../../assets/Menu.svg'
import menuIcon2 from '../../assets/Group 3.svg'
import logo from '../../assets/Lezzet Sofrasi 1.png'
import cardImage from '../../assets/thumbnail_arkadasinigetir_banner_copy_89b511ca31 1.png'
import phoneIcon from '../../assets/solar_phone-bold (2).svg'
import emailIcon from '../../assets/ic_baseline-email (2).svg'
import { useState } from 'react'
const CreativeInfo = () => {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <>
            <div className="creative__body">
                <div className="creative__menu">
                    {
                        !openMenu ? <img src={menuIcon2} alt="" style={{cursor:"pointer",background: "#222222", borderRadius: "24px" }} onClick={() => setOpenMenu(true)} /> : <img src={menuIcon} alt="" onClick={() => setOpenMenu(false)} style={{cursor:"pointer"}}/>
                    }
                </div>
                {
                    !openMenu ? (<>
                        <div className="creative__info__main">
                            <div className="company__info">
                                Web Sitesi <span>Krc Medya Grup Yazılım Teknolojileri</span> tarafından yapılmaktadır.
                            </div>
                            <div className="main__top">
                                <p>44.Yıl</p>
                                <p className='welcome__message'>HOŞ GELDİNİZ!</p>
                                <p>DIGITAL EXPERIENCE <br />DESIGN STUDIO</p>
                            </div>
                            <img src={logo} alt="" />

                            <div className="info__title">
                                Geçmişten Gümüze <br /><span>Lezzet Sofrası</span>
                            </div>
                            <div className="main__info">
                                <p>Lezzet Sofrası Catering, 1980 yılında Bursa'da kurulmuş bir catering şirketidir. Müşterilerimize sağlıklı ve lezzetli yemekleri profesyonel bir şekilde sunma misyonuyla yola çıktık. Bugüne kadar edindiğimiz deneyim ve müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde kendimize sağlam bir yer edindik.</p>
                                <p>Catering hizmetlerimiz, davetlerinizde ve organizasyonlarınızda mükemmel bir deneyim yaşamanızı sağlamak için tasarlanmıştır. Geniş ekip kadromuz ile sizin için özenle seçilmiş lezzetli yemekleri sunmakla kalmaz, aynı zamanda etkinliğinizin her aşamasında size destek olur.</p>
                                <p>Türk mutfağının zengin ve çeşitli lezzetlerini sunmanın yanı sıra, öğleden sonra tatlılarıyla da biliniriz. Misafirlerinizi memnun etmek için her zaman en kaliteli malzemeleri kullanırız.
                                    Müşteri memnuniyetini ön planda tutarak, engelsiz ulaşım imkanı sunarız ve ödeme seçenekleri arasında Mastercard, VISA ve nakit ödeme bulunur.</p>
                                <p>Lezzet Sofrası Catering olarak, her etkinliğinizde unutulmaz bir deneyim yaşamanız için buradayız. Siz değerli müşterilerimizi sağlıklı ve lezzetli yemeklerle buluşturmak bizim için bir ayrıcalıktır.</p>
                                <p>İletişim Bilgilerimiz</p>
                                <p>Lezzet Sofrası Catering olarak her türlü geri bildirim ve önerinize değer veriyoruz.</p>

                            </div>
                            <div className="contact__card">
                                <div className="card__left">
                                    <p>Bizi Arayın</p>
                                    <p>Sorularınızı telefon üzerinden daha rahat bir şekilde iletebilirsiniz. Hafta içi 09.00-18.00 saatleri arasında bizimle iletişime geçebilirsiniz.</p>
                                    <p><img src={phoneIcon} alt="" /> (0262) 353 42 52</p>
                                </div>
                                <div className="card__right">
                                    <p>Bize Yazın</p>
                                    <p>Soru, öneri ve talepleriniz için bize e-posta adresimizden ulaşabilirsiniz. Mesajlarınıza en geç 1 iş günü içerisinde dönüş yapıyoruz.</p>
                                    <p><img src={emailIcon} alt="" /> info@lezzetsofrasicatering.com.tr</p>
                                </div>
                            </div>
                        </div>


                    </>) : (<>
                        <div className="creative__main">
                            <div className="company__info">
                                Web Sitesi <span>Krc Medya Grup Yazılım Teknolojileri</span> tarafından yapılmaktadır.
                            </div>
                            <div className="main__top">
                                <p>44.Yıl</p>
                                <p className='welcome__message'>HOŞ GELDİNİZ!</p>
                                <p>DIGITAL EXPERIENCE <br />DESIGN STUDIO</p>
                            </div>
                            <div className="main__body">
                                <div className="main__body__left">
                                    <img src={logo} alt="" className='logo'/>
                                    <p>
                                        Sitemiz şu anda <span>yapım aşamasındadır.</span>
                                    </p>
                                    <p>Yakında sizlerle buluşacak olan yeni ve heyecan verici projemiz için sabırsızlanıyoruz!</p>
                                    <p>Ekip olarak, harika bir deneyim ve değerli içerikler sunmak için yoğun bir şekilde çalışıyoruz. Sizlere en iyi hizmeti sunabilmek adına her detayı titizlikle ele alıyoruz.</p>
                                    <div className="main__body__card">
                                        <div className="card__left">
                                            <img src={cardImage} alt="" />
                                        </div>
                                        <div className="card__right">
                                            <p>Anlayışınız ve sabrınız için <span>teşekkür ederiz.</span><br />Yakında tekrar görüşmek üzere!
                                            </p>
                                            <p>Yol tarifi almak veya adresimize ulaşmak için haritalardan destek alabilirsiniz. <span style={{textDecoration:"underline",color:"inherit"}}>Tıklayınız.</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__body__right">
                                    <p>Bizi Arayın</p>
                                    <p>Sorularınızı telefon üzerinden daha rahat bir şekilde iletebilirsiniz. Hafta içi 09.00-18.00 saatleri arasında bizimle iletişime geçebilirsiniz.</p>
                                    <p><img src={phoneIcon} alt="" /> 0224 366 58 59</p>
                                    <p>Bize Yazın</p>
                                    <p>Soru, öneri ve talepleriniz için bize e-posta adresimizden ulaşabilirsiniz. Mesajlarınıza en geç 1 iş günü içerisinde dönüş yapıyoruz.</p>
                                    <p><img src={emailIcon} alt="" /> info@lezzetsofrasicatering.com.tr</p>
                                </div>
                            </div>
                        </div>
                    </>)
                }

            </div>
        </>
    )
}

export default CreativeInfo