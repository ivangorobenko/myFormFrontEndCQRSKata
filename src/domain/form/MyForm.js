import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    textField: {
        margin: "10px",
    },
    card: {
        width: "50%"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
    }


});
export const MyForm = () => {
    const classes = useStyles();
    const [myText, setMyText] = useState()

    const onClick = () => {
        axios.post('http://localhost:8000/myForm', {
            myText
        }).then(() => {
            setMyText("");
        }).catch(err => {
            console.log(err)
        })
    };

    const onChange = (event) => {
        setMyText(event.target.value)
    };

    return (<Card className={classes.card}>
        <CardContent className={classes.cardContent}>

            <TextField
                id="standard-multiline-flexible"
                label="Mon text"
                className={classes.textField}
                multiline
                value={myText}
                onChange={onChange}
            />
            <Button className={classes.button} onClick={onClick} variant="contained" color="primary">
                Envoyer
            </Button>
        </CardContent>
    </Card>)
}
