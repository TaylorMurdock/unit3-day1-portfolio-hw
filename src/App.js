import "./App.css"; // Make sure this import is present
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
