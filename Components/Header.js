import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
    <header>
    <div className="container">
      <div className="flex aic">
        <div className="mobihead">
         <a href="index-2.html"> 
         {/* <img className="logo" src="img/logo-01.svg" alt=""></img> */}
         <h1 className="">React Website Header</h1>
         </a>
         <button className="menubutton"><span></span><span></span><span></span></button>
        </div>
  
        <nav className="flexGrow-1 text-right">
          <ul className="main-nav">
            <li className="mainmenu"><Link className="links" href="/About"><i className="icon icon-mob"></i> About Us</Link></li>
            <li className="mainmenu submenu"><i className="icon icon-mob"></i> Services <i className="icon icon-serv"></i>
              <div className="submenubox">
               <div className="container">
                <ul className="submenucontent">
                  <li>
                    <a className="boldLink" href="digital-marketing-services.html"><h4>Digital Marketing</h4></a>
                    <a className="submenulink" href="seo-services.html"><i className="icon"></i> SEO</a>
                    <a className="submenulink" href="local-seo-services.html"><i className="icon"></i> Local SEO</a>
                    <a className="submenulink" href="smm-agency.html"><i className="icon"></i> Social Media Management</a>
                    <a className="submenulink" href="ppc-management.html"><i className="icon"></i> PPC Management</a>
                    <a className="submenulink" href="influencer-marketing.html"><i className="icon"></i> Influencer Marketing</a>
                  </li>
                  <li>
                    <a className="boldLink" href="web-development.html"><h4>Web Development</h4></a>
                    <a className="submenulink" href="front-end-development.html"><i className="icon"></i> Front-End Development</a>
                    <a className="submenulink" href="back-end-development.html"><i className="icon"></i> Backend Development</a>
                    <a className="submenulink" href="ecommerce-development.html"><i className="icon"></i> Ecommerce Development</a>
                    <a className="submenulink" href="wordpress-development.html"><i className="icon"></i> Wordpress Development</a>
                    <a className="submenulink" href="shopify-development.html"><i className="icon"></i> Shopify Development</a>
                  </li>
                  <li>
                    <a className="boldLink" href="mobile-app-development.html"><h4>Mobile App Development</h4></a>
                    <a className="submenulink" href="ios-development.html"><i className="icon"></i> iOS App Development</a>
                    <a className="submenulink" href="android-development.html"><i className="icon"></i> Android App Development</a>
                    <a className="submenulink" href="react-native-development.html"><i className="icon"></i> React Native Development</a>
                    <a className="submenulink" href="flutter-development.html"><i className="icon"></i> Flutter Development</a>
                    
                  </li>
                  <li>
                    <a className="boldLink" href="creative-design.html"><h4>Creative Designing</h4></a>
                    <a className="submenulink" href="ui-ux-designing.html"><i className="icon"></i> UI UX Design</a>
                    <a className="submenulink" href="branding-agency.html"><i className="icon"></i> Branding</a>
                    <a className="submenulink" href="banner-ad-design.html"><i className="icon"></i> Banner Ad Designing</a>
                    <a className="submenulink" href="social-media-graphics.html"><i className="icon"></i> Social Media Graphics</a>
                    <a className="submenulink" href="packaging-designing.html"><i className="icon"></i> Packaging Designing</a>
                  </li>
                  <li>
                    <a className="boldLink" href="video-production.html"><h4>Video Production</h4></a>
                    <a className="submenulink" href="promotional-video.html"><i className="icon"></i> Promotional Video</a>
                    <a className="submenulink" href="explainer-video-production.html"><i className="icon"></i> Explainer Video</a>
                    <a className="submenulink" href="corporate-video-production.html"><i className="icon"></i> Corporate Video</a>
                    <a className="submenulink" href="animation-video-2d-3d.html"><i className="icon"></i> 2D 3D Animated Ad Video</a>
                    <a className="submenulink" href="artifical-intellegence-audio-video-production.html"><i className="icon"></i> AI Video & Audio Production</a>
                    <a className="submenulink" href="motion-graphics.html"><i className="icon"></i> Motion Graphics</a>
                  </li>
                </ul>
               </div>
              </div>
            </li>
            <li className="mainmenu"><a className="links" href="/Portfolio"><i className="icon icon-mob"></i> Portfolio</a></li>
            <li className="mainmenu"><a className="links" href="/Clients"><i className="icon icon-mob"></i> Clients</a></li>
            <li className="mainmenu"><a className="links" href="/Career"><i className="icon icon-mob"></i> Join Us</a></li>
            <li className="mainmenu"><a className="links" href="/Contact"><i className="icon icon-mob"></i> Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Header;