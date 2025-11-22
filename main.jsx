import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Test from './Test';




// import DropdownStateList from './DropdownStateList'
// import Rough from './CodingPractice/Rough'
// import NavigateRouter from './CodingPractice/NavigateRouter'
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from './Portfolio/Navbar'
// import Home from './Portfolio/Home'
// import SocialLinks from './Portfolio/SocialLinks'
// import About from './Portfolio/About'
// import Portfolio from './Portfolio/Portfolio'
// import Experience from './Portfolio/Experience'
// import Contact from './Portfolio/Contact'
// import Dropdown from './CodingPractice/Dropdown'
// import InputFocus from './CodingPractice/InputFocus'
// import Useid from './CodingPractice/Useid'
// import ClipBoard from './CodingPractice/ClipBoard'
// import WeatherApp from './WeatherApp'
// import Exmp_1 from './Redux/Snippets.jsx/Exmp_1'
// import { Provider } from 'react-redux'
// import ProductPage from './Redux/ProductPage'
// import { Store } from './Redux/Store'
// import CardPage from './Redux/CardPage'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <Provider store={Store}>
  <ProductPage/>
  <CardPage/>
</Provider> */}
   {/* <Exmp_1/> */}
   {/* <WeatherApp/> */}
{/* <ClipBoard/> */}
{/* <Useid/> */}
{/* <InputFocus/> */}
{/* <Dropdown/> */}
{/* <Navbar/>
<Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>

<SocialLinks/> */}
{/* <Rough/> */}
{/* <BrowserRouter><NavigateRouter/></BrowserRouter> */}
{/* <DropdownStateList/> */}
<Test/>

  </StrictMode>,
)
