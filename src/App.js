import './App.css';
import Search from './components/search/search';

function App() {
    
  return (
    <div className="container">
      <Search onSearchChange />
    </div>
  );
};

export default App;