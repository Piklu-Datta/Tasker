
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import TaskBoard from './Component/TaskBoard/TaskBoard'

function App() {
  

  return (
    <>
      <Header/>
     <div className='flex flex-col justify-center items-center'>
     <Hero/>
     <TaskBoard/>
     </div>
    </>
  )
}

export default App
