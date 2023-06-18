import React, { useState, useEffect } from "react";
import "./posts.css";
import { Avatar } from "@mui/material";
// import postimage from "./images/post.jpg";
import dislike from "./images/love.svg";
import comment from "./images/comment.svg";
import share from "./images/share.svg";
import Modal from "react-modal";

function Post(props) {
  const [commentList, setCommentList] = useState([]);
  const [like, setLike] = useState(props.likes);
  const [image, setImage] = useState(dislike);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const love =
    "https://as2.ftcdn.net/v2/jpg/02/33/05/69/1000_F_233056931_chB2vj6ThgrK2YRzKr9Ahg58XTw1K3Tn.jpg";

  const handleClick = () => {
    if (image === dislike) {
      setImage(love);
      setLike(props.likes + 1);
    } else {
      setImage(dislike);
      setLike(props.likes);
    }
  };
  useEffect(() => {
    getComments();
  });

  // const getComments = () => {
  //   let data = [
  //     {
  //       username: "Anubhav",
  //       commentId: "1234",
  //       timeStamp: "123456",
  //       description: "Cool",
  //     },
  //     {
  //       username: "Anurag",
  //       commentId: "1234",
  //       timeStamp: "123456",
  //       description: "Awesome",
  //     },
  //     {
  //       username: "Anirudh",
  //       commentId: "1234",
  //       timeStamp: "123456",
  //       description: "Mind Blowing",
  //     },
  //   ];
  //   setCommentList(data);
  // };
  const getComments = () => {
    setCommentList(props.comments);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  };

  return (
    <div className="post__container">
      {/* Header */}
      <div className="post__header">
        <Avatar className="post__image" src={props.avatar} />
        <div className="post__username">{props.userName}</div>
      </div>

      {/* Image */}
      <div className="Image">
        <img src={props.postImage} width="400px" alt="" />
      </div>

      {/* Analytics */}
      <div className="lcs">
        <div style={{ marginLeft: "0px" }}>
          <img
            title="Like"
            src={image}
            className="post_reactimage"
            alt=""
            onClick={handleClick}
          />
          <img
            title="Comment"
            src={comment}
            className="post_reactimage"
            alt=""
            onClick={() => setModalIsOpen(true)}
          />
          <img
            title="Share post"
            src={share}
            id="share"
            className="post_reactimage"
            alt=""
            // onClick={() => {
            //   const image = document.querySelector("#share");
            //   image.setAttribute("title", "Link Copied");
            // }}
          />
        </div>
        <div style={{ fontWeight: "bold", marginRight: "30px" }}>
          {like} likes
        </div>
      </div>

      {/* Comment Section */}

      <div className="comment">
        {commentList && (
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
          >
            {/* {commentList.map((item, index) => (
          <div className="post_comment">
            {props.Name}: {props.description}
          </div>
          ))} */}
            {commentList.map((comment, index) => (
              <div key={index}>
                {comment.user}: {comment.text}
              </div>
            ))}
          </Modal>
        )}
        <input
          text="text"
          className="commentbox"
          placeholder="Add a comment..."
        />
        {/* <button>post</button> */}
      </div>
    </div>
  );
}

export default Post;
