import React from 'react';
import logo from './logo.svg';
import './App.css';
import Teams from './teams.json'



function Welcome()
{
  return(<h1>This is the site for all of the Basketball Teams. We Love Basketball.</h1>);
}

// class Team extends React.Component {
//   render() {
    
//     const oneTeam = this.props;

//     return(
//       <div>
//         <img/>
//         <h2>{oneTeam.school}</h2>
//         <h3>Mascot: {oneTeam.name}</h3>
//         <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
//       </div>
//     );
//   }
// }

function TeamList()
{
  return(
    <div>
      {Teams.teams.map((team) => (
        <div>
          <h2>{team.school}</h2>
        <h3>Mascot: {team.name}</h3>
        <h3>Location: {team.city}, {team.state}</h3>
        </div>
      ))}
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Welcome/>
      <TeamList/>
    </div>
  );
}

export default App;
