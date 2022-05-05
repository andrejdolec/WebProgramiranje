import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Hello name="Andrej" />
      <Message msgtext="Ova e poraka za Zdravo"></Message>
      <Profile name="Andrej" surname="Dolevski" />
      {/* <Profile name="Student1" surname="Prezime1" />
      <Profile name="Student2" surname="Prezime2" /> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
