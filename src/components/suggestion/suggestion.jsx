import React, { useState, useEffect } from "react";
import "./suggestion.css";
import { Avatar } from "@mui/material";
// import imageSrc1 from "../images/pp1.png";
// import imageSrc2 from "../images/pp2.png";
// import imageSrc3 from "../images/pp3.jpeg";

const Suggestions = () => {
  const [post, setPost] = useState([]);
  const [follow, setFollow] = useState([]);

  const handleFollow = (index) => {
    let newFollow = [...follow];
    newFollow[index] = newFollow[index] === "Follow" ? "Following" : "Follow";
    // console.log("newFollow", newFollow);
    setFollow(newFollow);
  };

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    let data = [
      {
        name: "Abdul",
        imgurl:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Hari",
        imgurl:
          "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Prasanth",
        imgurl:
          "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Rahul",
        imgurl:
          "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Anirudh",
        imgurl:
          "https://images.pexels.com/photos/3596555/pexels-photo-3596555.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];
    setPost(data);
    setFollow(new Array(data.length).fill("Follow"));
  };

  return (
    <div>
      <div className="suggestions__container">
        <div className="suggestions__header">
          <div>Suggestions For You</div>
        </div>

        <div className="suggestions__body">
          {post.map((item, index) => (
            <div className="suggestions__friends">
              <Avatar src={item.imgurl} className="suggestions__image" />
              <div className="suggestions__username">{item.name}</div>
              <button
                title="click to follow"
                type="button"
                className="follow"
                onClick={() => handleFollow(index)}
              >
                {follow[index]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
