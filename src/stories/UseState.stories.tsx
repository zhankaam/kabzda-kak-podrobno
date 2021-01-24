import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react";

export default {
    title: 'useState demo',
   // component: ,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


function generateData () {
    // difficult counting
    console.log("generateData")
    return 1;
}


 export const Example1 = () => {
     console.log("Example1")

    /*const initValue = useMemo(generateData, [])*/

     const [counter, setCounter] = useState(generateData); // [1, function(newValue){}]
    /* const [counter, setCounter] = useState(initValue);*/


    /* const changer = (state: number) => {
return state + 1
     }*/


 return <>
     <button onClick={() =>setCounter(state => {
         return state + 1
     }) }>+</button>
     {counter}
     </>
}
