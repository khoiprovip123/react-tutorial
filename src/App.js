import logo from "./logo.svg";
import "./App.css";
// import * as contantAll from "./const/const";
import { name, job } from "./const/const";
import User from "./components/User";

// console.log(contantAll);
// console.log(contantAll.name);
console.log("name", name, "job", job);

console.log(User(1, 5));
function App() {
  return (
    <div className="App">
      <h1>Hello Word </h1>
    </div>
  );
}

export default App;
