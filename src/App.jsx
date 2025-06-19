import { useState } from "react"
import { languages } from "./languages-list/languages"

export default function AssemblyEndgame() {

  // State for word to guess
  const [currentWord, setCurrentWord] = useState('acknowledge')

  // Display stored word as individual letters
  const letterElements = currentWord.toUpperCase().split('').map((letter, index) => {
    return (
      <span key={index} className="letter-to-guess">{letter}</span>
    )
  })

  // Create span for every language
  const languagesElements = languages.map(language => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color
    }
    return (
    <span 
      className="language-chip" 
      style = {styles}
      key={language.name}
      >
        {language.name}
      </span>
    )

    })


    // Create button for every letter
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardElements = alphabet.toUpperCase().split('').map(letter => {
      return(
        <button key={letter} className="letter-btn">
          {letter}
        </button>
      )
    })
      

  return (
    <>
      <main>
        <header>
          <h1 className="game-title">Assembly: Endgame</h1>
          <p className="game-description">
            Guess the word in under 8 attempts to keep the <br/>
            programming world safe from Assembly.
          </p>
        </header>

        <section className="status-section">
          <h2>You Win!</h2>
          <p>Well done 🎉</p>
        </section>

        <section className="languages-container">
            {languagesElements}
        </section>

        <section className="letters-container">
          {letterElements}
        </section>

        <section className="keyboard">
          {keyboardElements}
        </section>
      </main>
    </>
  )
}


