import "./Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="footer-section">
                <h4> About </h4>
                <p> <a href="/about"> Om mig </a>  </p>
            </div>
            <div className="footer-section">
                <h4> Contact </h4>
                <p> Namn: Maximillian Hulth </p>
                <p style={{wordWrap: "break-word"}}> E-post: Maximillian.hulth@gmail.com </p>
                <p> Tele-nr: 0733337673 </p>
                <p> <a href="/contact"> Kontaktformulär </a> </p>
            </div>
            </div>
            <div className="footer-bottom">
               <p> &copy; 2021-Maximillian Hulth </p>
            </div>
        </footer>
    );
}

export default Footer;