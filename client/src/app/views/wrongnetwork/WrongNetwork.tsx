import * as React from 'react';

import config from 'config';

import omgcp_wrong_network from 'app/images/omgcp_wrong_network.svg';

import * as styles from './WrongNetwork.module.scss';

const networkMap = {
  'ropsten': 'Ropsten network',
  'main': 'Mainnet network',
  'rinkeby': 'Rinkeby network'
};

function WrongNetwork (): JSX.Element {
  return (
    <div className={styles.WrongNetwork}>
      <img
        className={styles.icon}
        src={omgcp_wrong_network}
        alt='logo'
      />
      <h1>You are on the wrong network</h1>
      <p>
        Please point your Web3 provider to the {networkMap[config.network]} and reopen this extension.
      </p>
    </div>
  );
}

export default React.memo(WrongNetwork);
