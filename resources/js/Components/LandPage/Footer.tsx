import React from "react";
import { makeStyles } from 'tss-react/mui';

const style = {
    footer: {
        position: "relative",
        bottom: 0,
        height: "20vh",
        // backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 50%, rgba(10,10,15,1) 91%)",
        background: "rgb(2,0,36)",
        clipPath: "polygon(100% 0%, 0% 20%, 0% 100%, 100% 100%)"
    },
    h1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        font: "30px Arial",
        color: "white",
        textAlign: "center"
    }
} as const;

const Footer = (props: any) => {
    return (
        <footer style={style.footer}>
            <h1 style={style.h1}>Footer</h1>
        </footer>
    );
};

export default Footer;
