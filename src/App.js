import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Posts from './components/Posts';
import ListOfTopic from './components/ListOfTopic';
import Navbar from './components/Navbar';
import AuthorDetails from './components/AuthorDetails';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div className='container'>
      <Navbar isLoggedIn = 'false' />
      <Header appname="The Eswar app" />
      {/* <ListOfTopic /> */}
      {/* <Posts /> */}
      {/* <AuthorDetails /> */}


      {/* define routes */}

      <Routes>

        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/posts" element={ <Posts /> } />
        <Route path="/" element={ <Home /> } />

      </Routes>

    </div>
  );
}

export default App;
