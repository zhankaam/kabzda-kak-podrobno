import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import UnControlledAccordion from "./UnControlledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


const callback = action("accordion mode change event fired");


export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={"Users"} />
};

