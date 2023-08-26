import Navbar from "./components/nav/Navbar";
import GoogleSheetReader from "./components/GoogleSheetReader";

function App() {
  return (
    <div className="mb-5">
      <Navbar />
      <GoogleSheetReader sheetId="11anRB-eGLAHJimLfo1eXEQgza8xpyVitZXY1rZnBa9g" />
    </div>
  );
}

export default App;
