import React from "react";

const style = {
    header: {
        position: "relative",
        top: 0,
        height: "40vh",
        // backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 50%, rgba(10,10,15,1) 91%)",
        background: "rgb(2,0,36)",
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 80%)"
    },
    h1: {
        margin: 0,
        padding: "100px 0",
        font: "30px Arial",
        color: "white",
        textAlign: "center"
    },
    small: {
        position: "relative",
        top: -100,
        color: "gray",
        textAlign: "center"
    }
} as const;
const Header = (props: any) => {
    return (
        <header style={style.header}>
            <h1 style={style.h1}>Conteúdo do header</h1>
            <p style={style.small}>marcelodevelopers2</p>
        </header>
    );
};

export default Header;
