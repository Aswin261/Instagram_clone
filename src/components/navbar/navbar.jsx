import React, { useState } from "react";
import "./navbar.css";
import Grid from "@mui/material/Grid";
import insta_log from "../images/logoinsta.png";
import home from "../images/home.svg";
import message from "../images/message.svg";
import find from "../images/find.svg";
import react from "../images/love.svg";
import Avatar from "@mui/material/Avatar";
import Modal from "react-modal";
import axios from "axios";

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", e.target.elements.image.files[0]);
      const res = await axios.post(
        "http://localhost:3001/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      alert("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Image cannot be uploaded");
    }
  };

  return (
    <div>
      <div className="navbar__barContent">
        <Grid container>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={3}>
            <img className="navbar_logo" src={insta_log} width="105px" alt="" />
          </Grid>
          <Grid item xs={3}>
            <input
              text="text"
              className="navbar__searchBar"
              placeholder="Search"
            />
          </Grid>
          <Grid item xs={3} style={{ display: "flex" }}>
            <img className="navbar__img" src={home} width="25px" alt="" />
            <img
              title="Upload Post"
              className="navbar__img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAXVBMVEX///8AAACsrKxubm6JiYlBQUEmJia3t7eCgoKysrL8/PxOTk5ycnK7u7t1dXUODg7S0tJkZGScnJxfX1/h4eFpaWnDw8Pv7+9UVFQ5OTnn5+cvLy8hISHY2NiTk5OHYlSFAAACqUlEQVR4nO2b2ZKCMBBFo2BYZRUXRvz/zxwxaRadQASSrqnq+6QU4R6STgLazZhKYXMskoinu1VKeZQUxyZU2ihUezlf5zwWz71a3z3MnPuW7kL3KtPsh/N1e3eh61nDPruZsm91y2bsL75J+1b+ZfL2D6b9d7vDRCfs30/muV/sV6nwP6fTXuXvjk6Lirnx0lZWRKNLu3+flgxv3T1t5S50cocdkcz4p4/JSFmmyyOdJBj0f/nFovWN6nJiFAbxF5ixbxUoIzHrR3/jwR/r1EfCKMQv3fw/GBh9DSfflv+QwO8PdgPAjfs/CbpR6Aeh23+Mjj/oBG43OHK2EP9DdXNB7s4h7P+lHX/GYD24iicUiIDU0PrzqRrWRBEFjvz2sOXP2ENaOi+cu70ZAIKZwNtO9ySNYo80I9h5vOfn3OYUBMFUzJ9zQPZGZNOfMfmEwkPWSJbCLkAhbRt2/FgXrQjm/rFDsevPWNfx8kmM2waQoZdANOSLrhIGZRl8/eb7Ug6xL0n8+SZ/+Mdt03gRgQ89n66YBF6/mnwtGXspBIPybWVKlWhbLWkLT8GrAJzBlkIABEAABEAABEAABEAABEAABIACEIu2sUmA0KscleIf0fYnVp5Seao3V02AUN7kcqnenTUBAtV19aX4AVoToFRdVl+KX6D/CwD6EKAHIfo0nJaNhWhS6EsxARAAARAAARAAARAAARAAARDAJn9eo/99j57AgJ7CgZ7Egp7Gg57IhJ7KhZ7Mhp7Oh5/QWEN6pcWUznqY0ome1Iqf1oue2Iye2o2f3I6V3t/0B7ELHPBLPNCLXPDLfPALnd5KvQwg1DOlXvjFbvjlfvgFj/gln891wp2/wjpNF70a74TZst9WyIXP7FX6vWnhuRDXLv1uhVv8LvvBTvn/L8k6K6X6LSiPAAAAAElFTkSuQmCC"
              width="23"
              height="23"
              alt=""
              onClick={() => setModalIsOpen(true)}
            />
            <img className="navbar__img" src={message} width="25px" alt="" />
            <img className="navbar__img" src={find} width="25px" alt="" />
            <img className="navbar__img" src={react} width="25px" alt="" />
            <Avatar
              src="https://images.unsplash.com/photo-1600854964509-6c18d85a260e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              className="navbar__img"
              style={{ maxWidth: "25px", maxHeight: "25px" }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Modal
          className="mod"
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <button type="submit">Upload Image</button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
