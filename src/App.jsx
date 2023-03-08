import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Passion from './components/Passion'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
        <Header />
        <Banner />
        <Passion />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default App



      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}