import { languages } from "./languages-list/languages"

export default function AssemblyEndgame() {



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
      </main>
    </>
  )
}


