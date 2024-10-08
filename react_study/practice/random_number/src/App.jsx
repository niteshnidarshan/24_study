import './App.css'
let number = Math.random()*1000;
const App = () => {
  return (
    <>
      <div>Jai Ram G Ki</div>
      <div>Refresh page and generate Random Number</div>
      <p>{Math.round(number)}</p>
    </>
  );
};

export default App
