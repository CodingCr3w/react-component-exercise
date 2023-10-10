import React from "react"

import PlayerScore from "./PlayerScore"

// Définition du type pour le tableau des scores
type Scores = Array<{
  pseudo: string // Le pseudo du joueur
  score: number // Son score
}>

// 💡 Définir le type pour les Props de ScoreBoard
// 💡 Les props doivent contenir une seule clef: "scores"
//   utilisant le type "Scores" défini ci-dessus

// 💡 Changer la définition de la fonction pour utiliser les props
export default function ScoreBoard() {
  return (
    <div className="score-board">
      {/** 💡 Parcourir le tableau "scores" et rendre PlayerScore pour chaque ligne */}
      {/** 💡 Ne pas oublier la prop "key" (vous pouvez utiliser le pseudo en key) */}
    </div>
  )
}
