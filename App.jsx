import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div className="brand">
          <img src="/logo.png" alt="SnuggleUp logo" />
          <div>
            <div className="title">SnuggleUp</div>
            <div className="tag">Baby essentials for modern parents</div>
          </div>
        </div>
      </header>
      <main>
        <h1>Welcome to SnuggleUp</h1>
        <p>Your new React frontend is ready!</p>
      </main>
    </div>
  )
}

export default App