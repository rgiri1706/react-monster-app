import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monster: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}));
  }

  render(){
    const { monster, searchField} = this.state;
    const filterMonster = monster.filter(monst => monst.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Lookout</h1>
        <SearchBox placeholder="search" handleChange={e=> this.setState({searchField: e.target.value})}/>
        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
