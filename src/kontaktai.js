import React from "react";
import Navbar from './Navbar';
export { default as Kontaktai } from "./kontaktai";

function kontaktai() {
    return (
        <div className="gradient-background-home-kontaktai container-fluid custom-height-main d-flex flex-column ">
            <Navbar />
                <div className="intro_1 custom-margin-top mb-5 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="custom-font-size-title mb-1">KONTAKTAI</p>
                    <p className="custom-font-size-text custom-align-mobile">Susisiekite tiesiogiai bernotaviciuss@gmail.com arba užpildykite formą</p>
                    <div className="border border-dark border-1 custom-width-line mt-3"></div>
                </div>
                <div className="intro_2 custom-margin-top mb-3 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="custom-font-size-text pb-1">Vardas</p>
                    <input type="text" className="border-dark border-1 custom-width-kLine mt-3 border-bottom"></input>
                </div>
                <div className="intro_3 mt-5 mb-3 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="custom-font-size-text pb-1">Elektroninis paštas</p>
                    <input type="text" className="border-dark border-1 custom-width-kLine mt-3 border-bottom"></input>
                </div>
                <div className="intro_4 mt-5 mb-5 w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className="custom-font-size-text mb-5 ">Daugiau informacijos</p>
                    <input type="text" className="border-dark border-1 custom-width-kLine custom-hight-info border-bottom"></input>
                </div>
                <div className='intro_4 text-decoration-underline custom-font-size-text d-flex justify-content-center align-items-center'>
                    <p className="text-decoration-uncderline custom-font-size-sec-title">Siusti pranešimą</p>
                </div>
            </div>
    );
}

export default kontaktai;