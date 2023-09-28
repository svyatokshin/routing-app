import { useNavigate } from "react-router-dom";
import berries from '../images/berries.jpg';

export default function Home() {
    const navigate = useNavigate();

    const routeToShop = () => {
        console.log('Submitting...')
        navigate('items-list')
    }

    return (
        <div className='home-wrapper' >
            {/* <img className="home-image"
            src={berries}
            alt='store-front' 
            /> */}
            <button onClick={routeToShop} className="md-button shop-button">
                Shop Berries Now!
            </button>
        </div>
    )
}