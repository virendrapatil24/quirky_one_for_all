
import './App.css'
import Content from './components/Content'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #399A7B 0%, #136362 75%)',
      }}
      className='h-full'
    >
      <NavBar />
      <Hero />
      <Content />

    </div>
  )
}

export default App
