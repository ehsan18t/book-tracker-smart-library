import Navbar from "./components/nav/Navbar";
import GoogleSheetReader from "./components/GoogleSheetReader";

function App() {
  return (
    <div>
      <Navbar />
      {/* https://docs.google.com/spreadsheets/d/e/2PACX-1vTPXZEjwINB6pIqpOJNAwFt0ZXQM38MM83srqMDBKPX3hG2m3s1j6gA5cesO_0NYncEkbzPPoDNnQR-/pubhtml */}
      <GoogleSheetReader sheetId="11anRB-eGLAHJimLfo1eXEQgza8xpyVitZXY1rZnBa9g" />
    </div>
  );
}

export default App;
