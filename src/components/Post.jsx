import { FaHeart, FaComment, FaPaperPlane, FaBookmark } from "react-icons/fa";

const Post = () => {
  const styles = {
    container: {
      backgroundColor: "white",
      marginTop: "24px",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    profileImage: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      overflow: "hidden",
    },
    username: {
      fontWeight: "600",
      fontSize: "18px",
    },
    postImageContainer: {
      marginTop: "16px",
    },
    postImage: {
      width: "100%",
      borderRadius: "10px",
    },
    description: {
      marginTop: "16px",
      fontSize: "14px",
    },
    boldText: {
      fontWeight: "bold",
    },
    actionButtons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "16px",
    },
    leftActions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    icon: {
      width: "32px",
      height: "32px",
      cursor: "pointer",
      transition: "color 0.2s",
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div style={styles.profileImage}>
          <img
            src="src/images/18.jpg" 
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p style={styles.username}>Naufal_Adhanii</p>
      </div>


      <div style={styles.postImageContainer}>
        <img
          src="src/images/18.jpg"
          alt="Post"
          style={styles.postImage}
        />
      </div>

  
      <div style={styles.description}>
        <p>
          <span style={styles.boldText}>Naufal_Adhanii</span> Lapar Euyyy
        </p>
      </div>

 
      <div style={styles.actionButtons}>
        <div style={styles.leftActions}>
          <FaHeart style={{ ...styles.icon, color: "#ff0000" }} />
          <FaComment style={{ ...styles.icon, color: "#555" }} />
          <FaPaperPlane style={{ ...styles.icon, color: "#007bff" }} />
        </div>
        <FaBookmark style={{ ...styles.icon, color: "#f4c542" }} />
      </div>
    </div>
  );
};

export default Post;