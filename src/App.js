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
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament, loggedIn, getPosts } from './actions/index';
// import { getPosts } from './services/PostsAPI';

function App() {
  const counter = useSelector(state=> state.counter );
  const isLogged = useSelector(state=> state.isLogged );
  const posts = useSelector(state=> state.posts );
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <Navbar isLoggedIn = 'false' />
      <Header appname="The Eswar app" />
      {/* <ListOfTopic /> */}
      {/* <Posts /> */}
      {/* <AuthorDetails /> */}


      {/* define routes */}
    
      <div className='APP'>
        <h1>The Counter :  {counter}</h1>
        <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(increament(5)) }}> +5 Inc </button>
        <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(decreament(5)) }}> -5 Dec </button>
        <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(loggedIn()) }}> - Login User </button>
        <button className='btn btn-info mr-3' onClick={ ()=> { dispatch(getPosts()) }}> Get All Posts </button>
      </div>

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
