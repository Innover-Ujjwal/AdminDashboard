import React, { useContext, useEffect } from "react";
import { Mycontext } from "../../App";
import logo from "../../assests/image/logo.png";
import background from "../../assests/image/background.png";
import './login.css'; // Assuming you have additional styles in login.css

const Login = () => {
    const context = useContext(Mycontext);

    useEffect(() => {
        context.setIsHideSidebar(true);
    }, []);

    return (
        <>
            {/* Background Image */}
            <img src={background} className='loginbackground' alt="Background" />

            {/* Logo and Text */}
            <div className="logo-container text-center mt-2"> {/* Adjusted margin top from mt-4 to mt-2 */}
                <img src={logo} alt="Logo" width="60px" />
                <h5 className="Ltext font-weight-bold mt-2">Login To HOTASH</h5> {/* Adjusted margin top from mt-4 to mt-2 */}
            </div>

            {/* Login Section */}
            <section className="loginsection">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem", background: "rgba(255, 255, 255, 0.8)" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                    <hr className="my-4" />

                                    <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: "#dd4b39" }} type="submit">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                    <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#3b5998" }} type="submit">
                                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
