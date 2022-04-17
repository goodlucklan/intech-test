import React from 'react'
import { Typography } from "@mui/material"
export const Habilites = ({ data }) => {
    return (
        <>
            {data.map((abilites, index) => (
                <Typography key={index} align="center" >
                    {abilites.ability.name}
                </Typography>
            ))}
        </>
    )
}
