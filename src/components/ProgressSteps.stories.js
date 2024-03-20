import React from 'react';
import ProgressSteps, { ProgressStepsStory } from './ProgressSteps'; 
import RegistrationScreen from './RegistrationScreen';

export default {
  title: 'Components/Registration with Progress Steps',
  component: ProgressSteps,
  argTypes: {
    activeStep: {
      control: {
        type: 'number',
      },
    },
    layout: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical', 'cell'],
      },
    },
  },
};

const Template = (args) => <ProgressSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeStep: 0,
  layout: 'horizontal', 
};

export const HorizontalLayout = ProgressStepsStory.bind({});
HorizontalLayout.args = { ...ProgressStepsStory.args, layout: 'horizontal' };

export const VerticalLayout = ProgressStepsStory.bind({});
VerticalLayout.args = { ...ProgressStepsStory.args, layout: 'vertical' };

export const CellLayout = ProgressStepsStory.bind({});
CellLayout.args = { ...ProgressStepsStory.args, layout: 'cell' };

export const RegistrationScreenStory = () => <RegistrationScreen />;