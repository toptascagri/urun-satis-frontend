import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Dashoard from './layouts/Dashoard';
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
        <Dashoard />
      </Container>

    </div>
  );
}

export default App;
