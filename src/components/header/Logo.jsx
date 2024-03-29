 import { Link } from 'react-router-dom'
import './css/header.scss'
function Logo () {
    return (
        <div>
        <Link to={`${process.env.PUBLIC_URL}/`} className="flex items-center">
            <div className="MainLogo" style={{backgroundImage: 'url("logo.png")'}}></div>
        </Link>
        </div>
    )
}

export default Logo;