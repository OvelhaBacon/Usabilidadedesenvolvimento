import React, { Component } from 'react';
import api from './api';
import "./App.css"

class App extends Component {
  state = {
    filmes: [],
  }


  async componentDidMount(sla) {
    const response = await api.get(sla);
    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;
    return (
      <div className='centered'>
        <h1>Filmes</h1>
        {console.log(filmes)}
        <input id="filmename" type="text" placeholder='Nome do seu filme' onChange={() => { this.componentDidMount(document.getElementById("filmename").value) }}></input>
        {filmes.map(filme => (
          <div key={filme.show.id}>
            <p>
              <a href={filme.show.url} target="_blank">{filme.show.name}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
