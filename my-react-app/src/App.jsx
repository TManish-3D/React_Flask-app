function App() {
  const goToFlask = () => {
    window.location.href = "http://localhost:5000/api/hello";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React App</h1>
      <button onClick={goToFlask}>
        Go to Flask Route
      </button>
    </div>
  );
}

export default App;
