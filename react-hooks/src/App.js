import React, { useState, useEffect } from 'react';

function App() {

  const [repositories, setRepositories] = useState([]);

  
  //sempre queo state mudar que esta dentro do array parametro do use effect,
  //caso tenha algo no array, vai executar novamente, se não tiver, só vai chamar 1.
  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/jorgjr/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);



  //caso mude repositories, muda o numero total de favoritos, contagem todos repo com favorito
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);



  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    });
    
    setRepositories(newRepositories);
  }

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
