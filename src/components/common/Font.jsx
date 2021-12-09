import "./Font.css"
import {BsInstagram, BsTwitch, BsFacebook} from "react-icons/bs"

const Font = () => {
    return (
        <div className="font-wrapper">
            <a href="https://www.instagram.com/hulthmaximillian/">
            <p className="icons"><BsInstagram/></p>
            </a>
            <a href="https://www.facebook.com/maximillianhulth/">
            <p className="icons"><BsFacebook/></p>
            </a>
            <a href="twitch.tv/mackehh">
            <p className="icons"><BsTwitch/></p>
            </a>
        </div>
    );
}

export default Font;