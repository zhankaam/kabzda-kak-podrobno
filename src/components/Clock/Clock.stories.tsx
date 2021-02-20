import { Meta } from '@storybook/react/types-6-0';
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
} as Meta;

export const BaseAnalogExamples = () => {
    return <Clock mode={"analog"}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
}