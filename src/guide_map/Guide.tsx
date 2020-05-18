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
      getHelpers: function getHelpers(helpers: StoreHelpers) {
        helpers = helpers;
      },

      showSkipButton: true,
      disableBeacon: true,
      showProgress: true,
      // callback: function handleJoyrideCallback(data: CallBackProps) {
      //   const { status, type } = data;
      //   const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

      //   if (finishedStatuses.includes(status)) {
      //     setState({ run: false });
      //   }
      // },
      target: '.step-1',
      content: (
        <div>
          Bem vindo a nossa página inicial!
          <br />
          Que tal um tour em seu primeiro acesso?
        </div>
      ),
    },
    {
      disableBeacon: true,
      target: '.step-2',
      content: 'Clicando aqui você pode ter acesso ao nosso portifólio.',
      showSkipButton: true,
    },
    {
      disableBeacon: true,
      target: '.step-3',
      content:
        'Para acessar nosso blog e estar dentro das notícias clique bem aqui!',
      showSkipButton: true,
    },
    {
      disableBeacon: true,
      target: '.step-4',
      content: 'Já é cliente cadastrado? Acesse a área do cliente aqui!',
      showSkipButton: true,
    },
    {
      disableBeacon: true,
      target: '.step-5',
      content: 'Tem dúvidas sobre nossos planos? Clique aqui e se informe.',
      showSkipButton: true,
    },
    {
      disableBeacon: true,
      target: '.step-6',
      content: 'Confira aqui nossos planos junto aos consultores!',
      showSkipButton: true,
    },
    {
      disableBeacon: true,
      target: '.step-7',
      content: (
        <div>
          Quer conhecer melhor nossa empresa?
          <br />
          Acompanhe nossas redes sociais!!
        </div>
      ),
      showSkipButton: true,
    },
  ]);

  // function handleClickStart(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();

  //   setState({
  //     run: true,
  //   });
  // }

  //   // tslint:disable:no-console
  //   console.groupCollapsed(type);
  //   console.log(data);
  //   console.groupEnd();
  //   // tslint:enable:no-console
  // }

  return <ReactJoyride steps={steps} />;
}
export default Guide;
