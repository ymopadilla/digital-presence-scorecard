import { useState } from 'react'
import styles from './Welcome.module.css'

export default function Welcome({ onStart }) {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <p className={styles.intro}>
        Before we start, pick the path that fits you. Your questions and results
        will be tailored to where you are.
      </p>

      <div className={styles.tracks}>
        <button
          className={`${styles.trackCard} ${selected === 'pro' ? styles.selected : ''}`}
          onClick={() => setSelected('pro')}
          aria-pressed={selected === 'pro'}
        >
          <i className={`ti ti-user-circle ${styles.trackIcon}`} aria-hidden="true" />
          <div className={styles.trackName}>Professional</div>
          <p className={styles.trackDesc}>
            You're building your personal brand online. Your digital presence
            represents <em>you</em>.
          </p>
          <p className={styles.trackExamples}>
            Freelancers · Coaches · Consultants · Job seekers · Creators
          </p>
        </button>

        <button
          className={`${styles.trackCard} ${selected === 'biz' ? styles.selected : ''}`}
          onClick={() => setSelected('biz')}
          aria-pressed={selected === 'biz'}
        >
          <i className={`ti ti-building-store ${styles.trackIcon}`} aria-hidden="true" />
          <div className={styles.trackName}>Business Owner</div>
          <p className={styles.trackDesc}>
            You run a business. Your digital presence represents your{' '}
            <em>company</em> and needs to attract customers.
          </p>
          <p className={styles.trackExamples}>
            Shops · Service businesses · Restaurants · Studios · Teams
          </p>
        </button>
      </div>

      <button
        className={styles.startBtn}
        disabled={!selected}
        onClick={() => onStart(selected)}
      >
        Start my scorecard →
      </button>
    </div>
  )
}
