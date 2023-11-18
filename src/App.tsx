import ListGroup from "./components/ListGroup";
function App() {
  let items = ["NY", "SF", "TKY", "LDN", "MNL"]

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /></div>

}

export default App;
