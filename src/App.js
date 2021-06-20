import './App.css';
import React from "react";
import {MyForm} from "./domain/form/MyForm";
import {MyAllTexts} from "./domain/form/MyAllTexts";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    paper: {
        margin:"10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:"40%",
        padding:"50px",
        backgroundColor: "#e8e7e7"
    },


});
const App = () => {
    const classes = useStyles();

    return (
        <div className="App">
            <Paper className={classes.paper}>
                <MyForm/>
                <MyAllTexts/>
            </Paper>
        </div>
    );
};

export default App;
