import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Luana';

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome='Minerva'/>
      <SayMyName nome='Angel'/>
      <SayMyName nome='Beua'/>
      <SayMyName nome={nome}/>
      <Pessoa nome='Wellington' idade='19' profissao='Dev' foto='https://t.vndb.org/ch/70/66070.jpg'/>
    </div>
  );
}

export default App;
