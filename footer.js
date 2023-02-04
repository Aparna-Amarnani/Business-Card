import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

import {AiFillGithub} from "react-icons/ai"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="flex_container">
               <a href=""><AiFillLinkedin/></a>
               <a href=""><AiFillInstagram /></a>
               <a href=""><AiFillGithub/></a>
               <a href=""><AiOutlineMail/></a>
            </div>
        </footer>
    )
}