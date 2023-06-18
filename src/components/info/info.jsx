import React from "react";
import "./info.css";
import { Avatar } from "@mui/material";

function Info() {
  return (
    <div>
      <div className="info__container">
        <Avatar
          src="https://images.unsplash.com/photo-1600854964509-6c18d85a260e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          className="info__image"
        />
        <div className="info_content">
          <div className="info_username"> Aswin</div>
          {/* <div class="post-info">
            <p>1 post </p>
            <p>407 followers</p>
            <p>337 following</p>
          </div> */}
          <div className="info_description">Nothing just Entertainment</div>
        </div>
      </div>
      {/* <div className="myPost">
        <img src={imageSrc} width="100px" height="100px" alt="" />
      </div> */}
    </div>
  );
}

export default Info;
