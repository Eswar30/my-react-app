import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Posts from './components/Posts';
import ListOfTopic from './components/ListOfTopic';

function App() {
  return (
    <div className='container'>
      {/* <Header appname="The Eswar app"/> */}
      <ListOfTopic />
      {/* <Posts /> */}

    </div>
  );
}

export default App;
