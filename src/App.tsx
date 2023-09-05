import Todos from "./components/Todos/Todos";
import "./assets/styles/App.scss";
import { TodosProvider } from "./components/TodosProvider/TodosProvider";

function App() {
  return (
    <div className="app">
      <div className="container--xl">
        <h1 className="app__title">
          Todos.<span>app</span>
        </h1>
        <TodosProvider>
          <Todos />
        </TodosProvider>
      </div>
    </div>
  );
}

export default App;
