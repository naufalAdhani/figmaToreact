// src/components/Messages.jsx
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  const messages = [
    { id: 1, name: "Meta AI", message: "Jawaban yang benar adalah: a) M", time: "6 jam", image: "src/images/18.jpg", active: true },
    { id: 2, name: "zabrinadena", message: "zabrindena: seneng sedih campur", time: "1 hari", image: "src/images/18.jpg", active: false },
    { id: 3, name: "duka", message: "Message content", time: "2 hari", image: "src/images/18.jpg", active: false },
    { id: 4, name: "not", message: "4+ pesan baru", time: "3 hari", image: "src/images/18.jpg", active: true },
    { id: 5, name: "syllaa0_", message: "Sedang aktif", time: "", image: "src/images/18.jpg", active: true },
    { id: 6, name: "let me now", message: "Message content", time: "5 hari", image: "src/images/18.jpg", active: false },
  ];

  const handleClick = (id) => {
    navigate(`/conversation/${id}`);
  };


  const styles = {
    container: {
      padding: "16px",
      backgroundColor: "white",
      marginTop: "80px",
    },
    messageItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "background 0.2s",
    },
    messageItemHover: {
      backgroundColor: "#f3f3f3",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    avatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      overflow: "hidden",
    },
    textContainer: {
      fontSize: "14px",
    },
    name: {
      fontWeight: "600",
    },
    messageText: {
      fontSize: "12px",
      color: "#888",
    },
    time: {
      fontSize: "12px",
      color: "#bbb",
    },
    activeStatus: {
      color: "green",
    },
  };

  return (
    <div style={styles.container}>
      {messages.map((message) => (
        <div
          key={message.id}
          onClick={() => handleClick(message.id)}
          style={{
            ...styles.messageItem,
            ...(message.active ? { backgroundColor: "#eef7ff" } : {}),
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#f3f3f3")}
          onMouseOut={(e) => (e.currentTarget.style.background = message.active ? "#eef7ff" : "white")}
        >
          <div style={styles.userInfo}>
            <div style={styles.avatar}>
              <img
                src={message.image}
                alt={message.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={styles.textContainer}>
              <p style={styles.name}>{message.name}</p>
              <p style={styles.messageText}>{message.message}</p>
            </div>
          </div>
          <div style={styles.time}>
            {message.active ? <span style={styles.activeStatus}>Aktif</span> : message.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;