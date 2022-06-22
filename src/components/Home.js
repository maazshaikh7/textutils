import React from 'react'
import Textform from "./Textform";
export default function Home(props) {
    return(
        <Textform  heading="Enter the text to analyze" mode={props.mode}/>
    )
}
