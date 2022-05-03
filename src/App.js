import React , {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Portfolio from './components/Portfolio';

function App() {
  const [pages] = useState([
    { name: 'about'},
    { name: 'contact'},
    { name: 'portfolio' , function: Portfolio }
  ])
  const [currentPage, setCurrentPage] = useState(pages[0]);

  console.log(currentPage)

  return (
    <div className="App">
      <Navbar 
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage} 
      pages = {pages}
      />
      
      <Page 
      currentPage = {currentPage} 
      />

    </div>
  );
}

export default App;
