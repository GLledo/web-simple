import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './components/pages/home/Home'
import Cards from './components/pages/cards/Cards'


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>

      </Switch>
    </>
  );
}

export default App;
