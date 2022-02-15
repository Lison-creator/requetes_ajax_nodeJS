import style from './App.css';
import classNames from 'classnames';
import Header from './containers/header/header';
import MessageContainer from './containers/message-container/message-container';


function App() {
  return (
    <>
      <div className={style.body}>
        <Header />

        <div className="App">

          <MessageContainer />
        </div>
      </div>


    </>
  );
}

export default App;
