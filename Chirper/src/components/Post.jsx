import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <>
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://i1.sndcdn.com/avatars-MP32mxRRMxRVctJM-rHKmOw-t500x500.jpg" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Ash Ketchum
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  @catchup_with_Ash
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>In a complicated Relationship with Pickachu</p>
            </div>
          </div>
          <img src="https://media.tenor.com/ps9eQkmo7lYAAAAC/no-pokemon.gif" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
