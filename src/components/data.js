import Slovo from "./slovo"

function Data({data}) {
  return (
    <div>
       {data.map((item, index) => <Slovo key={index} item={item}/>)}
    </div>
  )
}

export default Data