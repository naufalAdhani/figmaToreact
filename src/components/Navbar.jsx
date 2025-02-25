import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      background: "white",
      color: "black",
    },
    logo: { fontSize: "20px", fontWeight: "bold" },
    navLinks: { display: "flex", gap: "15px", alignItems: "center" },
    link: { color: "black", textDecoration: "none", fontSize: "16px" },
    icon: { fontSize: "20px" },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>PI ONE</div>
      <div style={styles.navLinks}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/messages" style={styles.link}>Messages</a>
        <FaUser style={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;