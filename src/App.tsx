import Bio from "./components/bio";
import Presenting from "./components/presenting";
import Projects from "./components/projects";

function App() {
  return (
    <div className="container">
      <Presenting />
      <Projects />
      <Bio />
    </div>
  );
}

export default App;
