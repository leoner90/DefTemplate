import { Router } from './router/index'
import NavBar from './components/header/NavBar.jsx'
import Footer from './components/Footer.jsx'
import './App.scss'

//REDUX (default import store/index.js)
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <div className="App" style={{ backgroundImage: "url('./mainBg.jpg')" }}>
        <div>
            <NavBar />
            <div id="BodyWrapper" className='BodyWrapper'>
            <Provider store={store}>
              <Router />
            </Provider>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
