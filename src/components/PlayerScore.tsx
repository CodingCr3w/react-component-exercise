import React from "react"

// 💡 Définir les Props pour le composant PlayerScore
// 💡 Ici on veut recevoir le pseudo (string) et le score (number)

// 💡 Changer la définition de la fonction pour recevoir les props
export default function PlayerScore() {
  return (
    <div className="player-score">
      <div className="pseudo">{/** 💡 Inclure le pseudo ici */}</div>
      <div className="score">{/** 💡 ...et le score ici */}</div>
    </div>
  )
}
