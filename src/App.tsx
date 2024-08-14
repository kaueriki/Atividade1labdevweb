import { Provider } from "./contexts";
import Home from "./pages/Home";

export default function App() {
  return (
    <Provider>
      <Home/>
    </Provider>
  );
}

