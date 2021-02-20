import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react";


export default {
    title: 'useCallback',
    // component: ,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a')> -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }


    type BooksSecretPropsType = {
        books: Array<string>,
        addBook: ()=> void
    }


    const BooksSecret = (props: BooksSecretPropsType) => {
        debugger
        console.log('BooksSecret')
        return <div>
            <button onClick={()=> props.addBook()}>add book</button>
            {
                props.books.map((book,i) => <div key={i}>{book}</div>)
            }
        </div>
    }
    return <>
<button onClick={()=> setCounter(counter + 1)}>+</button>
        {counter}
        <BooksSecret books={newArray} addBook={addBook}/>
    </>







}