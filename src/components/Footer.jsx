export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      marginTop: "auto",
      padding: "20px",
      backgroundColor: "#282c34",
      color: "white",
      textAlign: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
  };
  