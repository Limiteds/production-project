import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'TexsdfSD FSDF SDF SDF SDF SDF SDF  sdf sdf sdf sdf st',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'TexsdfSD FSDF SDF SDF SDF SDF SDF  sdf sdf sdf sdf st',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
