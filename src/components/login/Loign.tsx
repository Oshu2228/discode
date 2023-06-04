import React from "react";
import "./Loign.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Loign() {
  const signin = () => {

    signInWithPopup(auth, provider).catch((err)=>{
      alert(err.message)
    })

  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button onClick={signin}>ログイン</Button>
    </div>
  );
}

export default Loign;
