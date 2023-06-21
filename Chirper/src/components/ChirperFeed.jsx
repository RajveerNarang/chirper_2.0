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
        <Post
          displayName="Ash Ketchum"
          username="@catchup_with_Ash"
          verified={true}
          text=" In a complicated Relationship with Pickachu"
          avatar="https://i1.sndcdn.com/avatars-MP32mxRRMxRVctJM-rHKmOw-t500x500.jpg"
          image="https://media.tenor.com/ps9eQkmo7lYAAAAC/no-pokemon.gif"
        />
        {/*Post */}
        <Post
          displayName="Brock"
          username="@Brock_the_rock"
          verified={true}
          text="Hi folks"
          avatar="https://www.absoluteanime.com/pokemon/brock.jpg"
          image="https://pa1.narvii.com/6515/e5b848e458c40067bb07436797f861880cf4a5a7_hq.gif"
        />

        <Post
          displayName="Ash Ketchum"
          username="@catchup_with_Ash"
          verified={true}
          text=" In a complicated Relationship with Pickachu"
          avatar="https://i1.sndcdn.com/avatars-MP32mxRRMxRVctJM-rHKmOw-t500x500.jpg"
          image="https://media.tenor.com/ps9eQkmo7lYAAAAC/no-pokemon.gif"
        />
        {/*Post */}
        <Post
          displayName="Brock"
          username="@Brock_the_rock"
          verified={true}
          text="Hi folks"
          avatar="https://www.absoluteanime.com/pokemon/brock.jpg"
          image="https://pa1.narvii.com/6515/e5b848e458c40067bb07436797f861880cf4a5a7_hq.gif"
        />

        <Post
          displayName="Ash Ketchum"
          username="catchup_with_Ash"
          verified={true}
          text=" In a complicated Relationship with Pickachu"
          avatar="https://i1.sndcdn.com/avatars-MP32mxRRMxRVctJM-rHKmOw-t500x500.jpg"
          image="https://media.tenor.com/ps9eQkmo7lYAAAAC/no-pokemon.gif"
        />
        {/*Post */}
        <Post
          displayName="Brock"
          username="Brock_the_rock"
          //   verified={true}
          text="Hi folks"
          avatar="https://www.absoluteanime.com/pokemon/brock.jpg"
          image="https://pa1.narvii.com/6515/e5b848e458c40067bb07436797f861880cf4a5a7_hq.gif"
        />

        {/*Post */}
      </div>
    </>
  );
};

export default ChirperFeed;
