import About from "./components/about"
import Info from "./components/info"
import Interests from "./components/interests"
import Footer from "./components/footer"

export default function App(){
    return(
        <div className="app">
        <About/>
        <Info />
        <Interests />
        <Footer />
        </div>
    )
}