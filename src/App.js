import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Posts from './components/Posts';
import ListOfTopic from './components/ListOfTopic';
import Navbar from './components/Navbar';
import AuthorDetails from './components/AuthorDetails';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header appname="The Eswar app" />
      {/* <ListOfTopic /> */}
      <Posts />
      {/* <AuthorDetails /> */}

    </div>
  );
}

export default App;
