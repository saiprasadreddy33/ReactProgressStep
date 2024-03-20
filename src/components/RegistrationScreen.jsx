import React from 'react';
import ProgressSteps from './ProgressSteps';
const RegistrationScreen = () => {
    // eslint-disable-next-line no-unused-vars
    const steps = [
        { step: 'Step 1', label: 'Enter Username' },
        { step: 'Step 2', label: 'Provide Phone Number' },
        { step: 'Step 3', label: 'Enter Email Address' }
      ];
  return (
    <div>
      <h1>Registration Screen</h1>
      <ProgressSteps steps={1} layout="horizontal" />
      <label>Username:</label>
      <input type="text" />
      <br />
      <label>Phone Number:</label>
      <input type="tel" />
      <br />
      <label>Email:</label>
      <input type="email" />
    </div>
  );
};

export default RegistrationScreen;
/*import React from 'react';
import ProgressSteps from '../components/ProgressSteps';

const RegistrationScreen = () => {
  const steps = [
    { step: 'Step 1', label: 'Enter Username' },
    { step: 'Step 2', label: 'Provide Phone Number' },
    { step: 'Step 3', label: 'Enter Email Address' }
  ];

  return (
    <div>
      <h1>Registration Screen</h1>
      <ProgressSteps steps={steps} />
      <label>Username:</label>
      <input type="text" />
      <br />
      <label>Phone Number:</label>
      <input type="tel" />
      <br />
      <label>Email:</label>
      <input type="email" />
    </div>
  );
};

export default RegistrationScreen;
 */
