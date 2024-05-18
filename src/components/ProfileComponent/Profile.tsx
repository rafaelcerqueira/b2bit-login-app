import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<any | null>(null);
    const navigate = useNavigate();
        
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }



    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.get("https://api.homologation.cliqdrive.com.br/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: "application/json;version=v1_web",
                        "Content-Type": "application/json"
                    }
                });
                setProfile(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProfile();
    }, []);

    if (!profile) {
        return <div>Loading...</div>
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
};

export default Profile;