import {makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    gridContainer: {
        textAlign:"left",
        marginTop:"30px"
    },
    gridItem: {
        maxWidth: "250px"
    },
    card: {
        margin: "5px",
    },

});
export const MyAllTexts = () => {
    const classes = useStyles();
    const [myTexts, setMyTexts] = useState([])

    const getMyAllTexts = () => {
        axios.get('http://localhost:8000/myTexts').then((res) => {
            setMyTexts(res.data);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getMyAllTexts();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Grid className={classes.gridContainer} container>
            {
                myTexts.map((myText) => (
                    <Grid className={classes.gridItem} item key={myText.text}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="caption"  color="textSecondary" gutterBottom>
                                    Texte
                                </Typography>
                                <Typography color="textPrimary">
                                    {myText.text}
                                </Typography>
                                <Typography variant="caption"  color="textSecondary" gutterBottom>
                                    Nombre de caractères
                                </Typography>
                                <Typography color="textPrimary">
                                    {myText.nbChars}
                                </Typography>
                                <Typography variant="caption"  color="textSecondary" gutterBottom>
                                    Nombre de mots
                                </Typography>
                                <Typography color="textPrimary">
                                    {myText.nbWords}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>))}
        </Grid>
    )
}
