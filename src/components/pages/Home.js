import React from 'react';
import '../style/Home.scss';
import video from '../../assets/animation/background-video.mov';

const Home = () => {
    return (
        <div className="home">
        <video autoPlay muted loop id="myVideo" >
            <source src={video} type="video/mp4" />
        </video>
        <div className="content">
            <div className="container">
                <div className="homeui">
                    <div className="logo"><p>Avrasya Roleplay</p></div>
                    <div className="server-status">Sunucu Durumu: <span className="on-off">Online</span></div>
                    <div className="buttons">
                        <button className="btn success">Giris Yap</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Home;