import { useSelector } from 'react-redux'
import { setPlantInHand } from '../store/slices/shop'
import { useDispatch } from 'react-redux'

function buyPlant(dispatch) {
  try {
    dispatch(setPlantInHand(200))
  } catch (e) {
    console.log(e)
  }
}


function About() {
    const dispatch = useDispatch()
    const userMoney = useSelector(state => state.shop.money);
    const userName = useSelector(state => state.user.username)
    return (
        
        <div className="AboutWrapper"> 
            <button onClick={() => buyPlant(dispatch)}>Change </button>
            About {userMoney}
            {userName}
        </div>
    )
}

export default About;