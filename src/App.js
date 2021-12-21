import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
