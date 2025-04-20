import './App.css';
import BoxRecensione from './components/BoxRecensione';

function App() {
  return (
    <div className="App">
      
      <BoxRecensione
        titolo="Hotel 1"
        descrizione="Struttura vista mare"
        url ="https://cdn.blastness.biz/media/293/thumbs/full/thestyle-hotel-rom-top-6.jpg"
      />

      <BoxRecensione
        titolo="Hotel 2"
        descrizione="Struttura vista montagna"
        url = "https://hips.hearstapps.com/hmg-prod/images/vacanze-montagna-alto-adige-hotel-dove-dormire-ok-1551450187.jpg?crop=0.666xw:1.00xh;0.334xw,0&resize=1200:*"
      />

      <BoxRecensione
        titolo="Hotel 3"
        descrizione="Struttura vista lago"
      />

    </div>
  );
}

export default App;
