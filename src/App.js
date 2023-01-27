import './App.css';
import Button from './components/Button/Button';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Container>
        hi
        <br />
        <Button title='hello' onClick={() => console.log('hello big boy')}/>
      </Container>
      
    </div>
  );
}

export default App;
