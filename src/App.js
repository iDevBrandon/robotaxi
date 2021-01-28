import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
    </Router>
  );
}

export default App;
