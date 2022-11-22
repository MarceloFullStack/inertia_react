import React, { Component, Fragment } from "react";
import { Grid, CssBaseline, Button } from "@mui/material";
import MediaCard from "@/Components/Card";
import Footer from "@/Components/LandPage/Footer";
import Header from "@/Components/LandPage/Header";

const LandPage = () => {
    const [items, setItems] = React.useState([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "l"
    ]);
    const [page, setPage] = React.useState(1);

    function paginate(array: string | any[] | any, page_size: number, page_number: number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid
                container
                spacing={3}
                alignItems="center"
                style={{ minHeight: "100vh", padding: 30 }}
            >
                {paginate(items, 5, page).map((res: any) => {
                    return (
                        <Grid item xs={12} md={3} key={res}>
                            <MediaCard title={res} />
                        </Grid>
                    );
                })}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setPage((prev) => ++prev);
                    console.log(page);
                }}
            >
                Paginar
            </Button>
            <Footer />
        </>
    );
};

export default LandPage;
