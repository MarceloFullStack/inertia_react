import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const style = {
    wrap: {
        display: "flex",
        justifyContent: "center",
        flexGrow: 1
    },
    root: {
        maxWidth: "100%"
    },
    media: {
        width: "100%",
        height: 200,
        objectFit: "cover"
    }
} as const;

export default function MediaCard({title}: { title: string }) {

    return (
        <div style={style.wrap}>
            <Card style={style.root}>
                <CardActionArea>
                    <CardMedia
                        style={style.media}
                        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard: {title}
                        </Typography>
                        <Typography
                            noWrap
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Lizards are a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
