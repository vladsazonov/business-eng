import React from 'react';

import VerticalLinearStepper from '../stepper/stepper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

function MainPage() {
  const classes = useStyles();

  return <VerticalLinearStepper />;
}

export default MainPage;
