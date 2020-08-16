import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
]
const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="relative">
                <div className="flex flex-wrap items-end">
                    <div className="w-full md:w-1/2">
                        <div className="footer-left">
                            <div className="inner">
                                <span>Hazır mısınız?</span>
                                <h2>Hadi hemen <br /> başlayalım</h2>
                                <a className="rn-button-style--2" href="/contact">
                                    <span>Bize Ulaşın</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 pb-32 md:pb-0">
                        <div className="footer-right" data-black-overlay="6">
                            <div className="flex flex-wrap">
                                {/* Start Single Widget  */}
                                <div className="w-1/2">
                                    <div className="footer-link">
                                        <h4>İletişim</h4>
                                        <ul className="ft-link">
                                            <li><a href="mailto:info@onboard.center">email: info@onboard.center</a></li>
                                        </ul>

                                        <ul className="social-share flex justify-start mt-4 p-0">
                                            {SocialShare.map((val, i) => (
                                                <li key={i}><a className='w-8 inline-block h-auto text-light-gray text-left text-base hover:bg-transparent hover:text-white' href={`${val.link}`}>{val.Social}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Widget  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
export default Footer;