import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "./Profile.css";

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<any | null>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("/auth/profile/");
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return (
            <div className="card-container loading-gif">
            </div>
        );
    }

    return (
        <div className="profile_pg">
            <div className="profile_btn">
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            <div className="profile-container">
                <div className="profile-info">
                    <div className="profile_avatar">
                        <p>Profile picture</p>
                        <img src={profile.avatar.high} alt="avatar" />
                    </div>
                    <div className="user_info_section">
                        <p className="info_title">Your <b>Name</b></p>
                        <p className="user_info">{profile.name}</p>
                    </div>
                    <div className="user_info_section">
                        <p className="info_title">Your <b>E-mail</b></p>
                        <p className="user_info">{profile.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
