import "./App.css";

function App() {

  const name = "OBISIAN"
  console.log(name)

  const handleButton = (e) => {
    console.log(e.target === e.currentTarget);
  };
  return (
    <div>
      {console.log("iam here")}
      <h1>{name.toLocaleLowerCase()}</h1>
      <button onClick={handleButton}>
        <span>click</span>
      </button>
    </div>
  );
}

export default App;
