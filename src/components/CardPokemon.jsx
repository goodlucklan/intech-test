import React from 'react'
import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
} from "@mui/material";
export const CardPokemon = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <Grid key={index} item xs={12} sm={4}>
                    <Card style={{
                        border: "5px solid #000",
                        padding: 10
                    }}>
                        <CardActionArea onClick={() => window.open(`https://www.pokemon.com/us/pokedex/${item.name}`, "_blank")}>
                            <CardContent style={{
                                height: 280,
                                justifyContent: "center",
                                alignItems: "center",
                                display: 'flex',
                            }}
                                className="card-hover">
                                <CardMedia
                                    image={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                                    style={{
                                        height: 250,
                                        width: 250,
                                        borderStyle: "solid",
                                        borderRadius: "20px ",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        justifyItems: "center"
                                    }}
                                />
                            </CardContent>
                            <Typography align="center" variant="h4" style={{
                                borderStyle: "solid",
                                borderRadius: "8px ",
                                fontWeight: "bold",
                                background: "#000",
                                color: "#FFF"
                            }}
                            >
                                {item.name.toUpperCase()}
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}</>
    )
}
