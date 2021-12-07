import { useState } from "react";
import "./Contact.css"

function Contact() {
    const [message, setMessage] = useState("")
    return (
        <div className="contact-container"> 
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" 
            alt="" />
            <div className="contact-text">
            <div className="fcf-body">

<div >
<h3>Contact us</h3>

<form>
    
    <div >
        <label >Ditt namn</label>
        <div >
            <input type="text" required/> 
        </div>
    </div>

    <div >
        <label >Din E-post</label>
        <div >
            <input type="email" required/>
        </div>
    </div>

    <div >
        <label >Meddelande</label>
        <div >
            <textarea onChange={(e) => setMessage(e.target.value)}  rows="6" maxLength="3000" required></textarea>
        </div>
    </div>

</form>
    <div >
        <button onClick={() => console.log(message)} >Send Message</button>
    </div>
</div>

</div>
            </div>
        </div>
    );
}
export default Contact;