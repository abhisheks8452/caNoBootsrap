import React from 'react'
import { Carousel, Nav, Card, Button, Image, Container } from "react-bootstrap"
import "./Card.css"
import c from "../images/c.png"
import d from "../images/d.jpeg"
const Card1 = () => {
    return (
        <>
            <div class="row">
                <div class="column2">
                    <div className=" image1">


                    </div>
                </div>
                <div class="column2">
                    <div className="h11">

                        <span style={{ fontSize: "72px", color: "blue", fontWeight: "bolder" }}>
                            Join   the <span style={{ fontSize: "72px", color: "blue", fontWeight: "normal" }}>
                                Family</span> </span>
                        <br />
                        <span style={{ fontWeight: "normal", fontSize: "24px", color: "black", letterSpacing: "4px" }}>STUDENT<b> AMBASSADOR</b></span>
                        <br />
                        <span style={{ fontWeight: "normal", fontSize: "20px", color: "black", letterSpacing: "4px" }}>Lorem ipsum sit amet</span>
                        <br />
                        <button className="btn1 " style={{ backgroundColor: "blue" }}>REGISTER</button>
                    </div>
                </div>
            </div>



            <div class="row row1">
                <div className="role">
                    <span className="font-weight-bolder " style={{ fontSize: "50px", color: "blue" }}>
                        Role <span className=" font-weight-normal" style={{ fontSize: "50px", color: "blue" }}>
                            of a Student Ambassador
                        </span> </span>
                </div>
                <div class="column4 lorem-role">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Semper
                    imperdiet nam diam hac vehicula
                    massa fames diam tortor. Nam
                    nunc fringilla viverra sit diam
                    aliquam. Integer varius porttitor
                    pretium a. Quis a cras at lorem
                    libero dolor eu rhoncus. Purus sit
                    arcu, in eget tortor ut tellus.

                    Nam nunc fringilla viverra sit diam
                    aliquam. Integer varius porttitor
                    pretium a.
                </div>
                <div class="column5">
                    <div className=" image2">


                    </div>
                </div>
            </div>

            <div className="row">
                <span className="role1 " style={{fontWeight:"bolder" ,fontSize: "50px", color: "blue" }}>
                    Responsiblities <span className="" style={{ fontWeight:"normal",fontSize: "50px", color: "blue" }}>
                        and specific duties
                    </span> </span>

                <div className="margin-role">

                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>
                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>
                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>
                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>
                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>
                    <br />
                    <div ><img src={d} alt="" />
                        <span className="logo-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                            <br />

                            <span className="below-word"> luctus venenatis</span></span>
                    </div>


                </div>
            </div>

        </>



    )
}

export default Card1;
