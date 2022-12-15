import { useState } from "react";
import Data from "./components/data";
import SearchBar from "./components/searchBar";
import "./App.css"
import dataJson from "./slovicka2.json"

const letters = {
  "á": "a", "č":"c", "ď":"d", "é":"e", "ě":"e", "í":"i", "ň":"n", "ó":"o", "ř":"r", "š":"s", "ť":"t", "ú":"u", "ů":"u", "ý":"y", "ž":"z"
}

function App() {
  const data = dataJson
  const [displayData, changeDisplayData] = useState(data)

  const edit = (str) => {
    var text = str
    text = text.toLowerCase()
    for (var i = 0; i < text.length; i++) {

      if (text.charAt(i) in letters){
        text = text.substring(0, i) + letters[text.charAt(i)] + text.substring(i + 1);
      }
    }    
    return text
  }

  const search = (text) => {
    console.log(text)
    changeDisplayData(data.filter(item => edit(item["cz"]).includes(edit(text))))
  }

  return (
    <div className="App">
      <header>
        <SearchBar search={search}/>
      </header>
      <main>
        <Data data={displayData}/>
      </main>
    </div>
  );
}

export default App;
