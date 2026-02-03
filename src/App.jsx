import logo from './logo.svg';
import './App.css';

function App() {

// var name = 'Silas'
// let lastname = 'prata'
// const middle_name = 'prata pereira gomes santos'
// let fatia_texte = middle_name.split(" ")
// console.log(fatia_texte);
// console.table(fatia_texte);


let full_name = "Maria clara de jose"
let array_String = full_name.split("")
let name = array_String[0]
console.log(name);
let last_name = array_String[array_String.length - 1 ]
console.log(array_String.length);


// let last_name = array_String[]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          {`Olá, ${name} ${lastname} ${middle_name}`}
        </p>
        <p>
          {fatia_texte}
        </p> */}
        <p>
          {`Olá, ${name} ${last_name}`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
