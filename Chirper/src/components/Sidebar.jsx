import React from "react";
import "./Sidebar.css";
import ForumIcon from "@mui/icons-material/Forum";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      {/* <div>Sidebar</div> */}
      <div className="sidebar">
        {/*Chirper icon */}
        <ForumIcon className="sidebar_chirperIcon" />

        {/*SidebarOption Component */}
        <SidebarOption active Icon={HomeIcon} text="Home" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={SearchIcon} text="Explore" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        {/*SidebarOption Component */}
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        {/*Button -> Chirp */}
        <Button variant="outlined" className="sidebarChirpBtn" fullWidth>
          Chirp
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
