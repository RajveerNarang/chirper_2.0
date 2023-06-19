import React from "react";
import "./ChirpBox.css";
import { Avatar, Button, Input } from "@material-ui/core";

const ChirpBox = () => {
  return (
    <>
      <div className="chirpBox">
        <form>
          <div className="chirpBox_input">
            <Avatar src="https://i1.sndcdn.com/avatars-MP32mxRRMxRVctJM-rHKmOw-t500x500.jpg" />
            <input placeholder="What's happening?" type="text" />
          </div>
          <input
            placeholder=" Optional : Enter Image Url"
            type="text"
            className="chirpUrl_imageInput"
          />
          <Button variant="outlined" className="chirp_btn_chirpBox">
            Chirp
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChirpBox;
