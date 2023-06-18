import React, { useState, useEffect } from "react";
import "./mainPage.css";
import Post from "./posts";

function MainPage() {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    let data = [
      {
        postId: "123456",
        avatar:
          "https://images.unsplash.com/photo-1553998285-d99637ace719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        userName: "Anubhav",
        postImageURL:
          "https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        timeStamp: "12345",
        likes: 12,
        comments: [
          {
            user: "John",
            text: "Great post!",
          },
          {
            user: "Mary",
            text: "Thanks for sharing!",
          },
        ],
      },
      {
        postId: "123456",
        avatar:
          "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        userName: "Anurag",
        postImageURL:
          "https://images.unsplash.com/photo-1634295889011-439a70d7799b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        timeStamp: "12345",
        likes: 13,
        comments: [
          {
            user: "Mathew",
            text: "Marvellous",
          },
          {
            user: "Alicent",
            text: "Great!",
          },
        ],
      },
      {
        postId: "123456",
        avatar:
          "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        userName: "Anirudh",
        postImageURL:
          "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        timeStamp: "12345",
        likes: 23,
        comments: [
          {
            user: "Tyrion",
            text: "OMG!",
          },
          {
            user: "Bronn",
            text: "Nice!",
          },
        ],
      },
      {
        postId: "123456",
        avatar:
          "https://images.pexels.com/photos/1708528/pexels-photo-1708528.jpeg?auto=compress&cs=tinysrgb&w=600",
        userName: "Raghav",
        postImageURL:
          "https://images.pexels.com/photos/2221881/pexels-photo-2221881.jpeg?auto=compress&cs=tinysrgb&w=600",
        timeStamp: "12345",
        likes: 34,
        comments: [
          {
            user: "Euron",
            text: "Fantabulous",
          },
          {
            user: "Yara",
            text: "Nice to see!",
          },
        ],
      },
      {
        postId: "123456",
        avatar:
          "https://images.pexels.com/photos/734551/pexels-photo-734551.jpeg?auto=compress&cs=tinysrgb&w=600",
        userName: "Francis",
        postImageURL:
          "https://images.pexels.com/photos/1078851/pexels-photo-1078851.jpeg?auto=compress&cs=tinysrgb&w=600",
        timeStamp: "12345",
        likes: 41,
        comments: [
          {
            user: "Baelon",
            text: "Superb",
          },
          {
            user: "Sandor",
            text: "Good looking",
          },
        ],
      },
    ];
    setPostArray(data);
  };

  return (
    <div>
      {postArray.map((item, index) => (
        <Post
          avatar={item.avatar}
          id={item.postId}
          userName={item.userName}
          postImage={item.postImageURL}
          likes={item.likes}
          comments={item.comments}
        />
      ))}
    </div>
  );
}

export default MainPage;
