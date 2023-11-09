import '../styles/Banner.css'
import logo from '../assets/flower.png'
function Banner() {
    const title = 'Flower Store'
    return (
        <div className='fs-banner'>
            <img src={logo} alt='flower-store' className='fs-logo'/>
            <h1 className='fs-title'>{title}</h1>
        </div>
    )
}

export default Banner