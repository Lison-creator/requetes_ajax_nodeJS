import style from './App.css';
import classNames from 'classnames';
import Header from './containers/header/header';
import MessageContainer from './containers/message-container/message-container';
import PokemonSearch from "./containers/pokemon-search/pokemon-search"


function App() {
  return (
    <>
      <div className="body">
        <Header />

        <div className="App">
          <MessageContainer />
        </div>
        <div>
          <PokemonSearch />
        </div>
      </div>
    </>
  );
}

export default App;
