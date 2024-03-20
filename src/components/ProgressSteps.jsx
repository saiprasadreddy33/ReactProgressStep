import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ layout }) => (layout === 'vertical' ? '0' : '70px')}; /* Adjust margin-top based on layout */
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'column' : 'row')}; /* Adjust flex-direction based on layout */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: ${({ layout }) => (layout === 'vertical' ? 'auto' : '4px')}; /* Adjust height based on layout */
    width: ${({ layout }) => (layout === 'vertical' ? '4px' : '100%')}; /* Adjust width based on layout */
    top: ${({ layout }) => (layout === 'vertical' ? '0' : '50%')}; /* Adjust top based on layout */
    left: ${({ layout }) => (layout === 'vertical' ? '50%' : '0')}; /* Adjust left based on layout */
    transform: ${({ layout }) => (layout === 'vertical' ? 'translateX(-50%)' : 'translateY(-50%)')}; /* Adjust transform based on layout */
  }

  &::after {
    content: '';
    position: absolute;
    background: #4a154b;
    height: ${({ layout }) => (layout === 'vertical' ? '0' : '4px')}; /* Adjust height based on layout */
    width: ${({ width }) => width};
    top: ${({ layout }) => (layout === 'vertical' ? '0' : '50%')}; /* Adjust top based on layout */
    transition: ${({ layout }) => (layout === 'vertical' ? 'height' : 'width')} 0.4s ease; /* Adjust transition based on layout */
    transform: ${({ layout }) => (layout === 'vertical' ? 'translateX(-50%)' : 'translateY(-50%)')}; /* Adjust transform based on layout */
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'row' : 'column')}; /* Adjust flex-direction based on layout */
  align-items: ${({ layout }) => (layout === 'vertical' ? 'center' : 'flex-start')}; /* Adjust align-items based on layout */
  margin-bottom: ${({ layout }) => (layout === 'vertical' ? '20px' : '0')}; /* Adjust margin-bottom based on layout */
  text-align: center; /* Center align text for vertical layout */
  width: ${({ layout }) => (layout === 'vertical' ? '100%' : 'auto')};
`;

const StepStyle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) => (step === 'completed' ? '#4A154B' : '#F3E7F3')};
  transition: border-color 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #4a154b;
  border-radius: 50%;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: ${({ layout }) => (layout === 'vertical' ? '40px' : '100px')}; /* Adjust margin-top based on layout */
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: ${({ disabled }) => (disabled ? '#f3e7f3' : '#4a154b')};
  color: ${({ disabled }) => (disabled ? '#000000' : '#ffffff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  width: 90px;
  transition: transform 0.2s ease;

  :active {
    transform: scale(0.98);
  }

  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #4a154b;
`;

const steps = [
  {
    label: 'Sign-Up',
    step: 1,
  },
  {
    label: 'Log-In',
    step: 2,
  },
  {
    label: 'OTP',
    step: 3,
  },
  {
    label: 'Success',
    step: 4,
  },
];

const ProgressSteps = ({ layout }) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * activeStep}%`;

  const isLastStep = activeStep === totalSteps - 1;

  return (
    <MainContainer>
      <StepContainer width={width} layout={layout}>
        {steps.map(({ step, label }, index) => (
          <StepWrapper key={step} layout={layout}>
            <StepStyle step={index < activeStep ? 'completed' : 'incomplete'}>
              {index < activeStep ? <CheckMark>✓</CheckMark> : <StepCount>{step}</StepCount>}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer layout={layout}>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 0}>
          Previous
          </ButtonStyle>
          <ButtonStyle onClick={nextStep} disabled={isLastStep}>
          {isLastStep ? <CheckMark>✓</CheckMark> : 'Next'}
        </ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default ProgressSteps;

export const ProgressStepsStory = (args) => <ProgressSteps {...args} />;

ProgressStepsStory.args = {
  activeStep: 0,
  layout: 'horizontal', // Default layout set to horizontal
};

ProgressStepsStory.argTypes = {
  activeStep: {
    control: {
      type: 'number',
    },
  },
  layout: {
    control: {
      type: 'inline-radio',
      options: ['horizontal', 'vertical', 'cell'], // Control options for layout
    },
  },
};

ProgressStepsStory.storyName = 'ProgressSteps';
