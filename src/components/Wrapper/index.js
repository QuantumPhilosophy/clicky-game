import React, { Component } from "react"
import characters from "../../characters.json"
import CharacterCard from "../CharacterCard"
import NavBar from "../NavBar"
import Title from "../Title"
import SubTitle from "../SubTitle"
import "./style.css"

class Wrapper extends Component {
  state = {
    characters,
    currentScore: 0,
    losses: 0,
    highScore: 0,
    currentGuesses: []
  };

  componentWillMount() {
    this.randomizeCards(characters);
  };

  randomizeCards(charactersArray) {
    let randomIndex, tempValue, i;
    for (i = charactersArray.length -1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * (i + 1));
      tempValue = charactersArray[i];
      charactersArray[i] = charactersArray[randomIndex];
      charactersArray[randomIndex] = tempValue
    }
    return charactersArray;
  };

  onCharacterClick = id => {
    const stateSnapshot = {...this.state};
    // console.log(stateSnapshot);

    if (stateSnapshot.currentGuesses.includes(id)) {
      console.log('GameOver!');
      stateSnapshot.losses = stateSnapshot.losses +1;
      stateSnapshot.currentGuesses = [];
      stateSnapshot.currentScore = 0;
    } else {
      stateSnapshot.currentScore = stateSnapshot.currentScore +1;
      stateSnapshot.currentGuesses.push(id)
    }

    if (stateSnapshot.currentScore > stateSnapshot.highScore) {
      stateSnapshot.highScore = stateSnapshot.currentScore
    }

    this.randomizeCards(characters);

    this.setState( stateSnapshot )
  };

  render() {
    return <div className="wrapper">
      <NavBar
        currentScore={this.state.currentScore}
        losses={this.state.losses}
        highScore={this.state.highScore}
      />
      <Title>Saga Clicky Game</Title>
      <SubTitle>Don't click a character more than once.</SubTitle>
      {this.state.characters.map(character => (
        <CharacterCard
          onCharacterClick={this.onCharacterClick}
          id={character.id}
          key={character.id}
          image={character.image}
        />
      ))}
    </div>
  }
}

export default Wrapper
