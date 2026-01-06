function Navbar() {
  const goToPage = (route) => {
    window.open(`http://localhost:5000${route}`, "_blank");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#4B6CB7", color: "#fff" }}>
      <button onClick={() => goToPage("/")}>Home</button>
      <button onClick={() => goToPage("/about")}>About</button>
      <button onClick={() => goToPage("/contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
