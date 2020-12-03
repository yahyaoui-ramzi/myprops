import React, { Component } from "react";
import "./App.css";
import User from "./profile/component/profil";
import Myimage from "./profile/diego.jpg";
const user = {
  fullName: "Diego maradona",
  bio: "né le 30 octobre 1960 à Lanús (province de Buenos Aires, Argentine) et mort le 25 novembre 2020 à Tigre (province de Buenos Aires), est un footballeur international argentin devenu entraîneur. Il évoluait au poste de milieu offensif sous le maillot no 10." ,

  profession: "football legend",
  image: Myimage,
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <User x={user} />
      </div>
    );
  }
}
export default App;
