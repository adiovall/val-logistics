import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 25px",
        borderRadius: "50px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        color: "white",
        zIndex: 10,
      }}
    >
      <h3>Val Logistics</h3>

      <div>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/track" style={{ margin: "10px", color: "white" }}>Track</Link>
      </div>
    </div>
  );
}

export default Navbar;