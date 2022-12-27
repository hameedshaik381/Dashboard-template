import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import Person4Icon from '@mui/icons-material/Person4';
import Person2Icon from '@mui/icons-material/Person2';
import EventIcon from '@mui/icons-material/Event';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WavesIcon from '@mui/icons-material/Waves';
const SidebarMenu = () => {
  const navigate = useNavigate();
  return (
    <List>
        
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("dashboard");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <HomeIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Dashboard"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("student");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <PersonIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Students"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("teachers");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <Person4Icon/>
        </ListItemIcon>
        <ListItemText
          primary="Teachers"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("events");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <EventIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Events"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("finance");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <CleanHandsIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Finance"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("food");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <RestaurantIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Food"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("users");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <Person2Icon/>
        </ListItemIcon>
        <ListItemText
          primary="Users"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("chat");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <ChatBubbleOutlineIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Chat"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    <ListItem  disablePadding>
      <ListItemButton
        sx={{ "&:active": { backgroundColor: "white" } }}
        onClick={() => {
          navigate("latestActivity");
        }}
      >
        <ListItemIcon sx={{ color: "whitesmoke", paddingX: "20px" }}>
        
        <WavesIcon/>
        </ListItemIcon>
        <ListItemText
          primary="Latest activity"
          sx={{ color: "whitesmoke", paddingX: "10px" }}
        />
      </ListItemButton>
    </ListItem>
    
  
</List>
  )
}

export default SidebarMenu
