import { useState } from "react";
import PropTypes from "prop-types";
import { Stack, Box, Avatar, Drawer, AppBar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import Students from "./Components/pages/Students";
import Events from "./Components/pages/Events";
import Food from "./Components/pages/Food";
import Teachers from "./Components/pages/Teachers";
import Finance from "./Components/pages/Finance";
import Latestactivity from "./Components/pages/Latestactivity";
import Users from "./Components/pages/Users";
import Chat from "./Components/pages/Chat";
import SidebarMenu from "./Components/Sidebar/SidebarMenu";
import Brandname from "./Components/Sidebar/Brandname";
import Footer from "./Components/Sidebar/Footer";

const drawerWidth = 240;

const App = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box bgcolor="#4D45B6" sx={{ textAlign: "center" }}>
      <Brandname />
      <SidebarMenu />
      <Footer />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const color = indigo[50];
  return (
    <Box sx={{ display: "flex", backgroundColor: "whitesmoke" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        color="transparent"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "whitesmoke",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            color="primary"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", p: { sm: 3 } }}
          >
            Students
          </Typography>
          <Stack spacing={3} direction="row">
            <IconButton>
              <NotificationsNoneIcon
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "grey",
                  borderRadius: "20px",
                }}
              />
            </IconButton>
            <IconButton>
              <SettingsIcon
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "grey",
                  borderRadius: "20px",
                }}
              />
            </IconButton>

            <Stack>
              <Typography fontSize="13px" color="indigo">
                Hameed shaik
              </Typography>
              <Typography fontSize="13px" color="grey" textAlign="right">
                Admin
              </Typography>
            </Stack>
            <Avatar>H</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#4D45B6",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#4D45B6",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="student" element={<Students />} />
          <Route path="events" element={<Events />} />
          <Route path="food" element={<Food />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="finance" element={<Finance />} />
          <Route path="latestActivity" element={<Latestactivity />} />
          <Route path="users" element={<Users />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </Box>
    </Box>
  );
};

App.propTypes = {
  window: PropTypes.func,
};

export default App;
