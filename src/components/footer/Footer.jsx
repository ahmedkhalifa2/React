import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
export default function Footer() {

    return <>
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#"><FaFacebook className='iconFooter'/></a>
                    <a href="#"><FaInstagram className='iconFooter'/></a>
                    <a href="#"><FaYoutube className='iconFooter'/></a>
                    <a href="#"><FaTwitterSquare className='iconFooter'/></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className="row">
                    INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
                </div>
            </div>
        </footer>
    </>
}