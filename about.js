import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

export default function About(){
    return(
        <div className="about">
            <img src="https://images.unsplash.com/photo-1607688387801-122722be93c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTQzMzI3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" />
            <p className="name">Aparna Amarnani</p>
            <p className="prof">FrontEnd Developer</p>
            <p className="email">aparnaamarnani03@gmail.com</p>
            <a href=""><button className="button1"><AiFillLinkedin className="logo"/> LinkedIn</button></a>
            <a href=""><button className="button2"><AiOutlineMail className="logo"/> Email</button></a>
        </div>
    )
}