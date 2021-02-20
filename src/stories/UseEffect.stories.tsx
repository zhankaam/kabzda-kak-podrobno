import React, {useEffect, useMemo, useState} from "react";
import {Meta} from "@storybook/react";


export default {
    title: 'useEffect demo',
    // component: ,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


export const SimpleExample = () => {
    const [fake, setFake] =useState(1)
    const [counter, setCounter] =useState(1)
    console.log("SimpleExample")


    useEffect(() => {
    console.log("useEffect every render")
        document.title = counter.toString();
})

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() =>setFake(fake + 1) }>fake+</button>
        <button onClick={() =>setCounter(counter + 1) }>counter+</button>
    </>
}

export const SetTimeOutExample = () => {
    const [fake, setFake] =useState(1)
    const [counter, setCounter] =useState(1)
    console.log("SetTimeOutExample")

    useEffect(() => {
        setInterval( ()=> {
            setCounter(state => state + 1)
        }, 1000)
/*
        setTimeout( ()=> {
            console.log('setTimeOut')
            document.title = counter.toString();
        }, 1000)*/

    },[])

    return <>
        Hello, counter: {counter}
        {/*<button onClick={() =>setFake(fake + 1) }>fake+</button>
        <button onClick={() =>setCounter(counter + 1) }>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] =useState(1)

    console.log("Component rendered")

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log("RESET EFFECT")
        }
    },[counter])

    const increase = () => { setCounter(counter + 1)}

        return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] =useState("")

    console.log("Component rendered " + text)

    useEffect(() => {
       window.addEventListener("keypress", (e) => {
           console.log(e.key)
           setText((state) => state + e.key)
       })

    },[text])


    return <>
        Typed text: {text}
    </>
}