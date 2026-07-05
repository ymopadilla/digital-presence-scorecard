import { useState } from 'react'
import Welcome from './components/Welcome.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/ResultsPanel.jsx'
import styles from './App.module.css'

export default function App() {
  const [screen, setScreen] = useState('welcome')
  const [track, setTrack] = useState(null)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)

  function handleStart(selectedTrack) {
    setTrack(selectedTrack)
    setAnswers({})
    setScreen('quiz')
  }

  function handleComplete(finalAnswers, finalScore) {
    setAnswers(finalAnswers)
    setScore(finalScore)
    setScreen('results')
  }

  function handleRestart() {
    setTrack(null)
    setAnswers({})
    setScore(null)
    setScreen('welcome')
  }

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <header className={styles.header}>
  <img src="/logo.png" alt="AIn't That Complicated" className={styles.logoImg} />
  <div className={styles.logo}>
    <span className={styles.logoAccent}>Digital Presence</span> Scorecard
  </div>
  <p className={styles.tagline}>
    Find out where you stand — and what to work on next
  </p>
</header>
        <hr className={styles.divider} />

        {screen === 'welcome' && <Welcome onStart={handleStart} />}
        {screen === 'quiz' && <Quiz track={track} onComplete={handleComplete} />}
        {screen === 'results' && (
          <Results track={track} score={score} answers={answers} onRestart={handleRestart} />
        )}

        <footer className={styles.footer}>
          A free tool from{' '}
          <a href="https://aintthatcomplicated.com" target="_blank" rel="noreferrer">
            AIn't That Complicated
          </a>{' '}
          · AI classes for real people
        </footer>
      </main>
    </div>
  )
}
