const notFoundStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0", // Background color for the entire page
};

const headerStyles = {
  fontSize: "36px",
  color: "#333", // Text color
};

const messageStyles = {
  fontSize: "18px",
  color: "#666", // Subtext color
};

const NotFound = () => {
  return (
    <div style={notFoundStyles}>
      <h1 style={headerStyles}>404 - Page Not Found</h1>
      <p style={messageStyles}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
