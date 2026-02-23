import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecordTable from './Components/RecordTable'
import { Provider } from 'react-redux'
// import './App.css'
import { store } from './store/store';

function App() {
 
  return (
   <Provider store={store}>
   <RecordTable/>
   </Provider>
  )
}

export default App
