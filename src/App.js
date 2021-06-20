import './App.css';
import React from "react";
import {MyForm} from "./domain/form/MyForm";
import {MyAllTexts} from "./domain/form/MyAllTexts";


const App = () => {


    return (
        <div className="App">
            <MyForm/>
            <MyAllTexts/>
        </div>
    );
};

export default App;
