import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__logo">
        <FacebookIcon className="logo__1"/>
        <InstagramIcon className="logo__2"/>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="heading__1">
   <h3>Buy</h3>
   <p>Build your BMW
Price lists and catalogs
Almost new BMW
Accessories and prices
Business Drive
Private leasing
Calculate insurance
Webshops</p>
                </div>

                <div className="heading__2">
                    <h3>plug</h3>
                    <p>   Contact BMW Sweden
                    Trial run
                    Price proposal
                    Book service
                            Newsletter
                                FAQ  </p>
                </div>


                <div className__3>
                    <h2>© BMW AG 2020</h2>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
