import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" color="error" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Something went wrong. The page you are looking for does not exist or an
        unexpected error occurred.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default ErrorPage;
