import { Box, Typography, Container, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 2, sm: 3 }, // responsive padding
        px: { xs: 2, sm: 3 },
        mt: "auto",
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}
        >
          &copy; {new Date().getFullYear()} PFA App. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mt: 1,
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
          }}
        >
          Built with{" "}
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            href="https://mui.com/"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            MUI
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
