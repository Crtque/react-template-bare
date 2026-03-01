import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Container from "./Container";
import LocalLoader from "./LocalLoader";

export default function Header() {
  const { user, loading, handleLogout } = useAuth();

  return (

    <header className="z-20 relative shadow-[rgba(0,0,15,0.5)_0px_10px_8px_0px] h-[50px] p-[10px] bg-[#282c34]" >
          <Container>
      <nav className="flex gap-[15px] justify-between">
        <div className="flex gap-[15px]"><Link to="/" style={styles.link}>Home</Link>
            {loading ? <LocalLoader /> : ""}
        </div>
          <div className="right">
            {user && <button onClick={handleLogout} className="rounded px-2 text-white cursor-pointer py-1 bg-cyan-900">Logout</button>}
            {!user && <span className="text-white">Not authenticated</span>}
          </div>
      </nav>
      </Container>
    </header>
  );
}

const styles = {
  link: { color: "white", textDecoration: "none", fontSize: "18px" },
};