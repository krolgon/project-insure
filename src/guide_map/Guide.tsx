import React, { useState } from 'react';
import ReactJoyride, {
  CallBackProps,
  STATUS,
  Step,
  StoreHelpers,
} from 'react-joyride';

interface Props {
  breakpoint: string;
}

interface State {
  run: boolean;
  steps: Step[];
}

function Guide(state: State, props: Props) {
  const [steps, setState] = useState([
    {
      run: true,
      showProgress: true,
      showSkipButton: true,
      disableBeacon: false,
      target: '.step-1',
      content: 'Bem vindo a nossa página inicial :D',
    },
    {
      disableBeacon: true,
      target: '.step-2',
      content: 'Bem vindo a nossa página inicial :D',
    },
  ]);

  function getHelpers(helpers: StoreHelpers) {
    helpers = helpers;
  }

  // function handleClickStart(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();

  //   setState({
  //     run: true,
  //   });
  // }

  // function handleJoyrideCallback(data: CallBackProps) {
  //   const { status, type } = data;
  //   const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

  //   if (finishedStatuses.includes(status)) {
  //     setState({ run: false });
  //   }

  //   // tslint:disable:no-console
  //   console.groupCollapsed(type);
  //   console.log(data);
  //   console.groupEnd();
  //   // tslint:enable:no-console
  // }

  return <ReactJoyride steps={steps} />;
}
export default Guide;
