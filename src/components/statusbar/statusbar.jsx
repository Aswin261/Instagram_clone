import React, { useState, useEffect } from "react";
import "./statusbar.css";
import { Avatar } from "@mui/material";
import ReactPlayer from "react-player";

const StatusBar = () => {
  const [statusList, setStatusList] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data = [
        {
          username: "Aswin",
          imageURL:
            "https://images.unsplash.com/photo-1600854964509-6c18d85a260e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          videoURL: "https://youtube.com/shorts/NddmbrKIF_c?feature=share",
        },
        {
          username: "Abbas",
          imageURL:
            "https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
          videoURL: "https://youtube.com/shorts/Ywa74B2rHio?feature=share",
        },
        {
          username: "Ashok",
          imageURL:
            "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          videoURL: "https://youtube.com/shorts/-c6R9qvWFP8?feature=share",
        },
        {
          username: "Hari",
          imageURL:
            "https://images.unsplash.com/photo-1616468042205-88ef837b839e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
          videoURL: "https://youtube.com/shorts/m1bJNyrdfTE?feature=share",
        },
        {
          username: "Gunal",
          imageURL:
            "https://images.unsplash.com/photo-1616702577637-3a23332dc1e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxtb2RlbCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
          videoURL: "https://youtube.com/shorts/D7bHN0Z8pH0?feature=share",
        },
        {
          username: "Karthik",
          imageURL:
            "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?size=626&ext=jpg&ga=GA1.2.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/g_Tzzzqo_0E?feature=share",
        },
        {
          username: "Ajay",
          imageURL:
            "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?size=626&ext=jpg&ga=GA1.2.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/zOIc46VC6Dc?feature=share",
        },
        {
          username: "Aravind",
          imageURL:
            "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/7IzITtRg-uo?feature=share",
        },
        {
          username: "Darsan",
          imageURL:
            "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4919.jpg?size=626&ext=jpg&ga=GA1.1.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/BpdvtsZwly0?feature=share",
        },
        {
          username: "Dinesh",
          imageURL:
            "https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?size=626&ext=jpg&ga=GA1.1.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/q67SM4PWDGg?feature=share",
        },
        {
          username: "Bala",
          imageURL:
            "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-grey-wall_158538-23994.jpg?size=626&ext=jpg&ga=GA1.2.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/5IMpZv5sjtU?feature=share",
        },
        {
          username: "Dharnesh",
          imageURL:
            "https://img.freepik.com/free-photo/stylish-tall-arabian-man-model-white-shirt-jeans-sunglasses-posed-street-city-beard-attractive-arab-guy_627829-2583.jpg?size=626&ext=jpg&ga=GA1.1.1141691336.1665633772&semt=ais",
          videoURL: "https://youtube.com/shorts/tU2x-OdR_cI?feature=share",
        },
      ];
      setStatusList(data);
    };
    fetchData();
  }, []);

  const handleAvatarClick = (videoURL) => {
    setVideoUrl(videoURL);
  };
  const closeVideoPlayer = () => {
    setVideoUrl(null);
  };

  return (
    <div>
      <div className="statusbar__container">
        {statusList.map((item, index) => (
          <div className="status" key={index}>
            <Avatar
              className="statusbar__status"
              src={item.imageURL}
              onClick={() => handleAvatarClick(item.videoURL)}
            />
            <div className="statusbar__text">{item.username}</div>
          </div>
        ))}
      </div>
      {videoUrl && (
        <ReactPlayer
          url={videoUrl}
          width="600px"
          playing={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      )}
      {videoUrl && (
        <div className="video-overlay">
          <svg
            onClick={closeVideoPlayer}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </div>
      )}
      <br />
    </div>
  );
};

export default StatusBar;
