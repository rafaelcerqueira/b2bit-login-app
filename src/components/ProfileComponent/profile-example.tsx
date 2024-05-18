import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile_pg">
            <div className="profile_btn">
                <button className="logout-btn">Logout</button>
            </div>
            <div className="profile-container">
                <div className="profile-info">
                    <div className="profile_avatar">
                        <p>Profile picture</p>
                        <img src="https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                    </div>
                    <div className="user_info_section">
                        <p className="info_title">Your <b>Name</b></p>
                        <p className="user_info">Christine James</p>
                    </div>
                    <div className="user_info_section">
                        <p className="info_title">Your <b>E-mail</b></p>
                        <p className="user_info">christinejames@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;