import styles from './Results.module.css'

function getScoreTier(pct) {
  if (pct >= 80) return {
    label: 'Strong presence',
    sub: 'Your digital presence is working for you. A few targeted improvements could take it even further.',
  }
  if (pct >= 55) return {
    label: 'Getting there',
    sub: "You have a foundation, but there are clear gaps holding you back. The good news: they're fixable.",
  }
  if (pct >= 30) return {
    label: 'Needs attention',
    sub: "Your digital presence isn't doing the work it should. Addressing these gaps will make a real difference.",
  }
  return {
    label: 'Starting from scratch',
    sub: "Don't worry — everyone starts somewhere. Focus on one area at a time and you'll see results quickly.",
  }
}

export default function Results({ track, score, onRestart }) {
  const { pct, tips } = score
  const { label, sub } = getScoreTier(pct)

  return (
    <div>
      <div className={styles.badge}>
        <i className={`ti ${track === 'pro' ? 'ti-user-circle' : 'ti-building-store'}`} aria-hidden="true" />
        {track === 'pro' ? 'Professional track' : 'Business Owner track'}
      </div>

      <div className={styles.scoreCard}>
        <div className={styles.scoreNum} aria-label={`Score: ${pct} percent`}>
          {pct}%
        </div>
        <div>
          <div className={styles.scoreLabel}>{label}</div>
          <div className={styles.scoreSub}>{sub}</div>
        </div>
      </div>

      <h2 className={styles.tipsTitle}>Here's what to work on</h2>

      {tips.length === 0 ? (
        <div className={styles.tip}>
          <i className="ti ti-check" style={{ color: 'var(--atc-accent)', fontSize: 16, marginTop: 1, flexShrink: 0 }} aria-hidden="true" />
          <p className={styles.tipText}>
            You're doing great across the board! Consider a professional audit to uncover any hidden opportunities.
          </p>
        </div>
      ) : (
        tips.slice(0, 6).map((tip, i) => (
          <div key={i} className={styles.tip}>
            <i className="ti ti-alert-circle" style={{ color: 'var(--atc-accent)', fontSize: 16, marginTop: 1, flexShrink: 0 }} aria-hidden="true" />
            <p className={styles.tipText}>
              <span className={styles.tipLabel}>{tip.label}: </span>
              {tip.text}
            </p>
          </div>
        ))
      )}

      <div className={styles.cta}>
        <h3 className={styles.ctaTitle}>Ready to fix it?</h3>
        <p className={styles.ctaSub}>
          You can learn to do this yourself — or hand it off to someone who handles it every day.
        </p>
        <div className={styles.ctaBtns}>
          <a href="https://aintthatcomplicated.com" className={styles.btnPrimary} target="_blank" rel="noreferrer">
            Learn to do it yourself →
          </a>
          
          <a href="https://digitalnavigationsolutions.com" className={styles.btnSecondary} target="_blank" rel="noreferrer">
            Have it done for you →
          </a>
        </div>
      </div>

      <button className={styles.restart} onClick={onRestart}>
        ← Start over
      </button>
    </div>
  )
}