import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Chirper" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's Chirping</h2>

          <TwitterTweetEmbed tweetId={"1670536893065314304"} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Brockpokemon"
            options={{ height: 400 }}
          />
        </div>
      </div>
    </>
  );
};

export default Widgets;
