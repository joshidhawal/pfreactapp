import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

function RootLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 2, sm: 3 } }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default RootLayout;
