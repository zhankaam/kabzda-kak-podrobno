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

export const SetIntervalExample = () => {
    const [fake, setFake] =useState(1)
    const [counter, setCounter] =useState(1)
    console.log("SetTimeOutExample")

    useEffect(() => {
       const setIntervalId = setInterval( ()=> {
            setCounter(state => state + 1)
        }, 1000)
/*
        setTimeout( ()=> {
            console.log('setTimeOut')
            document.title = counter.toString();
        }, 1000)*/
       return ()  => {
           clearInterval(setIntervalId)
        }

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
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

       window.addEventListener("keypress",handler )
       return () => {
            window.removeEventListener('keypress', handler)
       }
    },[text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] =useState("")

    console.log("Component rendered " + text)

    useEffect(() => {

       const TimeoutId = setTimeout(() => {
           setText('3 seconds passed')
       },3000)
        return () => {
             clearInterval(TimeoutId)
        }
    },[text])


    return <>
        Typed text: {text}
    </>
}