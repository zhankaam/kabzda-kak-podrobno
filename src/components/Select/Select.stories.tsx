import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {Meta} from "@storybook/react";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const WithValue = () => {
    const [value, setValue] = useState("2");
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return  <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
}