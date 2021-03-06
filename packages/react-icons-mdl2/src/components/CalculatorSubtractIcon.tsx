import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const CalculatorSubtractIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M0 896h1920v128H0V896z" />
    </svg>
  ),
  displayName: 'CalculatorSubtractIcon',
});

export default CalculatorSubtractIcon;
