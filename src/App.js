import React from 'react'
// import About from './Components/About/About';
// import Header from './Components/Header/Header';
import TodoApp from './Components/TodoApp'
// import {BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
     <TodoApp/>
    </div>
    // <BrowserRouter>
    // <Header></Header>
    // <Route path="/" exact component={ TodoApp}></Route>
    // <Route path="/about" component={ About}></Route>
    // </BrowserRouter>
  );
}

export default App;
