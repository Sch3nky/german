import { useEffect, useState } from "react";
import Data from "./components/data";
import SearchBar from "./components/searchBar";
import "./app.css"

const letters = {
  "á": "a", "č":"c", "ď":"d", "é":"e", "ě":"e", "í":"i", "ň":"n", "ó":"o", "ř":"r", "š":"s", "ť":"t", "ú":"u", "ů":"u", "ý":"y", "ž":"z"
}

function App() {
  const [data, changeData] = useState([])
  const [displayData, changeDisplayData] = useState([])

  useEffect(() => {
    const url = "/data";

    const fetchData = async () => {
      try {
        fetch(url).then(
          res => {
            if (res.ok){
              res.json().then(json=>{
                changeData(json)
                changeDisplayData(json)
              })
            }
          }
        );
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  },[])

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
