// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button1  from './Button1';

export default {

  title: 'Button',
  component: Button1,
} as ComponentMeta<typeof Button1>;

const Template: ComponentStory<typeof Button1> = (args) => <Button1 {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    primary : true,
    label : "Click Me"
}