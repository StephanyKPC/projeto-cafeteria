import {  useNavigate } from "react-router-dom";
import './home.css'

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <div className="home-title">
                <h1>Coffee shop</h1>
                <h2>As the cafes pass, the years get better</h2>
            </div>
            <hr />
            <main>
                <p>Special coffees, national and imported.</p>
                <button
                onClick={() => navigate('/coffees')}
                >
                Discover our products
                </button>
            </main>
        </div>
    )
}

export default Home;