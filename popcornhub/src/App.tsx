import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "New Yourk",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
  ];

  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length ===0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key = {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
