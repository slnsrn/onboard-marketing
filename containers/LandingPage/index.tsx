import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";

import Services from "./Services"

export const brandList = [
    {logo:'securitas', alt:'Securitas'},
    {logo:'eren', alt:'Eren Holding'},
    {logo:'ups', alt:'ups'},
    {logo:'rebul', alt:'Rebul'},
    {logo:'atelier-rebul', alt:'Atelier Rebul'},
    {logo:'p&g', alt:'Procter&Gamble'},
    {logo:'atelier-rebul', alt:'Atelier Rebul'}
  ]


const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        title: 'Onboard',
        description: 'Ofis işlerini bize bırakın, biz yapalım. Sizin yapacak daha önemli işleriniz vardır!',
        buttonText: 'Hemen Başla',
        buttonLink: '/contact'
    }
]
const sliderImage =
  "/landing/bg-image-1.jpg";

const image1 =
  "/landing/bg-image-12.jpg";


const image3 =
  "/landing/bg-image-4.jpg";

const image8 =
  "/landing/bg-image-8.jpg";




const renderBrands = () =>{
    return(<ul className='brand-style-2'>
        {brandList.map(brand=> <li>
                        <img src={`/landing/brands/${brand.logo}.png`} alt={brand.alt}/>
                    </li>)}
                    </ul>)
}


const LandingPage = ()=>{
        return(
            <Fragment>
                <Header />

                <div className="slider-wrapper">
                    <Parallax bgImage={sliderImage} strength={700}>
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="flex flex-wrap">
                                        <div className="col-lg-12">
                                            <div className={`inner ml-12 ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Parallax>
                </div>

                <Parallax className="rn-paralax-service" bgImage={image1} strength={1000}>
                    <div className="service-area ptb--120">
                        <div className="container">
                            <div className="flex flex-wrap align-items-center">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h2>Neden mi Onboard?</h2>
                                        <p>Çünkü Onboard ofis işlerini hallerderken sizin yerinize hallederken, siz asıl hedeflerinize daha kolay odaklabilirsiniz.</p>
                                    </div>
                                </div>
                            </div>
                            <Services/>
                        </div>
                    </div>
                </Parallax>

                <Parallax className="rn-brand-area brand-separation ptb--120" bgImage={image3} strength={1000}>
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="col-lg-12">
                                <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                    <h2>Bizden Bahsediyorlar</h2>
                                    <p className='text-lg'>Reservio kullanan firmalar bakın bizim için neler söylüyor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brand-wrapper">
                        <div className="container">
                            <div className="flex flex-wrap">
                                <div className="col-lg-12">
                                    {renderBrands()}
                                </div>
                            </div>
                        </div>
                    </div>

                </Parallax>

                <div className="backto-top">
                    <ScrollToTop showUnder={160} className='flex'>
                        <FiChevronUp className='self-center mx-auto'/>
                    </ScrollToTop>
                </div>

                <Footer />

            </Fragment>
        )
    }

export default LandingPage;