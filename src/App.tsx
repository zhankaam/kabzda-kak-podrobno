import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UnControlledAccordion/UncontrolledOnOff/UncontrolledOnOff";


// function declaration
function App() {
    //debugger

    let [RatingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    // полезное что-то
    //обязана вернуть jsx
   // console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff on={switchOn}
            onChange={ setSwitchOn }
            />
            <UnControlledAccordion titleValue={"Menu"} />
            <Rating value={RatingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={ () => {setAccordionCollapsed(!accordionCollapsed)}} />
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) {
   // console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}*/


export default App;
