import Nav from "./Components/Nav.js"
import Hero from "./Components/Hero.js"
import data from "./data"

export default function App() {
    const alldata = data.map(item => {
      return (
        <Hero 
            item={item}
        />
      )
    })
    return (
        <main className="main__container">
            <Nav />
            {alldata}
        </main>
    )
}