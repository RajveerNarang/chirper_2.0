import React from "react";
import "./ChirperFeed.css";
import ChirpBox from "./ChirpBox";
import Post from "./Post";

const ChirperFeed = () => {
  return (
    <>
      <div className="feed">
        {/*Header */}
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        {/*ChirpBox */}

        <ChirpBox />

        {/*Post */}
        <Post />
        {/*Post */}

        <Post />
        {/*Post */}

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default ChirperFeed;
