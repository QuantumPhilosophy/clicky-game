import React from "react"
import "./style.css"

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={ () => props.onCharacterClick(props.id) }/>
      </div>
    </div>
  )
}

export default CharacterCard
