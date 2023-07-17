import Counter from "./components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
        React - Redux
      </h2>
      <Counter />
    </Provider>
  );
}

export default App;
