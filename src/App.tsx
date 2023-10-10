import React from "react"

// 💡 Importer le composant ScoreBoard

import "./styles.css"

// Les scores sont déclarés statiquement ici pour l'exercise. On
// pourrait imaginer qu'en conditions réelles ils seraient récupérés
// via une API externe.
const SCORES = [
  { pseudo: "Janelle85", score: 38837 },
  { pseudo: "Mallory14", score: 34532 },
  { pseudo: "Axel_Kunze", score: 21851 },
  { pseudo: "Zakary.Boyer45", score: 86247 },
  { pseudo: "Domenic.Kuhn", score: 74552 },
  { pseudo: "Orpha.Towne", score: 35919 },
  { pseudo: "Crawford.Smitham", score: 82127 },
  { pseudo: "Zena.Goldner27", score: 35191 },
  { pseudo: "Ludie.Smith87", score: 60723 },
  { pseudo: "Carol11", score: 98594 },
  { pseudo: "Allison34", score: 23831 },
  { pseudo: "Houston.Harris12", score: 46928 },
  { pseudo: "Jacklyn.Mitchell", score: 7540 },
  { pseudo: "Alexandria_Konopelski38", score: 70581 },
  { pseudo: "Edward.Feeney28", score: 85498 },
  { pseudo: "Kelly.Maggio", score: 23196 },
  { pseudo: "Joey_Borer", score: 4744 },
  { pseudo: "Xander51", score: 31861 },
  { pseudo: "Zander.Flatley7", score: 56824 },
  { pseudo: "Amy_Dicki", score: 41358 },
]

export default function App() {
  return (
    <div className="App">
      <h1>
        Score Board{" "}
        <span aria-label="game-logo" role="img">
          🎯
        </span>
      </h1>
      <p>Checkout the highscores bellow ! Will you be able to do better ?</p>
      {/** 💡 Rendre ScoreBoard en lui passant SCORES en prop */}
    </div>
  )
}
