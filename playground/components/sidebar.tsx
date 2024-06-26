import { styled } from 'goober';
import * as React from 'react';

import { useWizard } from '../../dist';
import { Button } from '../modules/common';

export const Nav = styled('nav')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0;

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;

    & > p {
      margin: initial;
    }
  }
`;

const Sidebar: React.FC = () => {
  const { activeStep, stepCount, goToStep, steps } = useWizard();

  return (
    <Nav>
      {stepCount > 0 && (
        <ul>
          {steps.map((stepName, index) => (
            <li key={index}>
              <Button
                label={stepName.name || `Step ${stepName.number}`}
                onClick={() => goToStep(index)}
                disabled={index > activeStep}
              >
                {stepName.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Nav>
  );
};

export default Sidebar;
