import './footer.css'

function Footer(){
    return (
        <footer className="footer" id="footer-section">
            <div className='footer-container'>
                <div className="left-header">
                    <h1>React App</h1>
                </div>
                <div className="footer-right">
                    <a href="">Vlogs</a>
                    <a href="">About</a>
                    <a href="">Help</a>
                    <a href="">Concect</a>
                </div>
            </div>
            <div className="footer-copy">Copyright - Anil Kumar</div>
        </footer>
    )
}

export default Footer