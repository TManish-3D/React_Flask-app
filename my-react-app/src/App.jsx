import Navbar from "./Navbar";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <header style={{ textAlign: "center", padding: "100px", background: "linear-gradient(to right, #4B6CB7, #182848)", color: "#fff" }}>
        <h1>Welcome to Our Website</h1>
        <p>Click the navbar buttons to explore Flask pages!</p>
      </header>
    </div>
  );
}

export default App;
