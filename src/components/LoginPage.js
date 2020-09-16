import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {
    return (
        <div className="bg">
            <div className="container">
                <div className="login-panel">
                    <form action="#">
                        <div className="input-elements">
                        <label className="login-header">Login</label>
                            <input type="text" className="username" placeholder="Username" />
                            <input type="text" className="passwd" placeholder="Password" />
                            <input type="submit" className="sendit" value="Giris" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;