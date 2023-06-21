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
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* Ash Ketchum */}
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                  {/* @catchup_with_Ash */}s
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>
                {/* In a complicated Relationship with Pickachu */}
                {text}
              </p>
            </div>
          </div>
          <img src={image} />
          {/* https://media.tenor.com/ps9eQkmo7lYAAAAC/no-pokemon.gif */}
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
