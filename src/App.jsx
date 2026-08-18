import './App.css'
import { useState } from 'react'
import PortfolioPage from './PortfolioPage'

function App() {
  const [view, setView] = useState('landing')
  const [transitionState, setTransitionState] = useState('in')

  const changeView = (nextView) => {
    setTransitionState('out')

    setTimeout(() => {
      setView(nextView)
      setTransitionState('in')
    }, 140)
  }

  return (
    <div className={`page-shell ${transitionState}`}>
      {view === 'landing' ? (
        <div className="landing-shell">
          <div className="landing-panel">
            <div className="landing-content">
              <p className="eyebrow">COMPUTER ENGINEERING • SOFTWARE DEVELOPMENT</p>

              <h1>
                Hi, I'm <span>Ricardo.</span>
              </h1>

              <p className="landing-description">
                I'm a 4th-year Computer Engineering student passionate about software
                development, embedded systems, and building practical technology
                solutions.
              </p>

              <button className="landing-button" onClick={() => changeView('portfolio')}>
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PortfolioPage onBack={() => changeView('landing')} />
      )}
    </div>
  )
}

export default App