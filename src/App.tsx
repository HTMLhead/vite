import "./App.css";
import { Link } from "./components";
import { useRouter } from "./customHooks";

function App() {
  return (
    <div>
      <div>main</div>
      <Link href="/about">
        <button>go to about</button>
      </Link>
    </div>
  );
}

export default App;
