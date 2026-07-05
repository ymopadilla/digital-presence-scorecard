import { useState } from 'react'
import { PRO_SECTIONS, BIZ_SECTIONS, PRO_TIPS, BIZ_TIPS, LABELS } from '../data.js'
import styles from './Quiz.module.css'

export default function Quiz({ track, onComplete }) {
  const sections = track === 'pro' ? PRO_SECTIONS : BIZ_SECTIONS
  const allQuestions = sections.flatMap(s => s.questions)
  const [answers, setAnswers] = useState({})

  const answeredCount = Object.keys(answers).length
  const progress = Math.round((answeredCount / allQuestions.length) * 100)
  const allAnswered = answeredCount === allQuestions.length

  function handleChange(id, value) {
    setAnswers(prev => ({ ...prev, [id]: value }))
  }

  function handleSubmit() {
    const tipMap = track === 'pro' ? PRO_TIPS : BIZ_TIPS
    let total = 0
    const tips = []

    allQuestions.forEach(q => {
      const val = answers[q.id]
      total += val
      if (val < 2 && tipMap[q.id]?.[val]) {
        tips.push({ label: LABELS[q.id], text: tipMap[q.id][val] })
      }
    })

    const pct = Math.round((total / (allQuestions.length * 2)) * 100)
    onComplete(answers, { pct, tips })
  }

  return (
    <div>
      <div className={styles.badge}>
        <i
          className={`ti ${track === 'pro' ? 'ti-user-circle' : 'ti-building-store'}`}
          aria-hidden="true"
        />
        {track === 'pro' ? 'Professional track' : 'Business Owner track'}
      </div>

      <div className={styles.progressWrap} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Quiz progress">
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      {sections.map(section => (
        <div key={section.title} className={styles.section}>
          <div className={styles.sectionTitle}>
            <i className={`ti ${section.icon}`} aria-hidden="true" />
            {section.title}
          </div>

          {section.questions.map(q => (
            <div key={q.id} className={styles.question}>
              <p className={styles.qText}>{q.text}</p>
              <div className={styles.options} role="radiogroup" aria-label={q.text}>
                {q.options.map(opt => (
                  <label
                    key={opt.value}
                    className={`${styles.option} ${answers[q.id] === opt.value ? styles.selected : ''}`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={answers[q.id] === opt.value}
                      onChange={() => handleChange(q.id, opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <button
        className={styles.submitBtn}
        disabled={!allAnswered}
        onClick={handleSubmit}
      >
        See my score →
      </button>
    </div>
  )
}
