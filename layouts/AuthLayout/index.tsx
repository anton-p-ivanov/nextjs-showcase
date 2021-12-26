import React from 'react';

import data from '../../package.json';
import styles from './styles.module.scss';

const AuthLayout: React.FC = ({ children }) => (
  <div className={styles.layout}>
    {children}
    <div className={styles.layout__copyright}>
      {`© ${data.description} v${data.version} by ${data.author}`}
    </div>
  </div>
);

export default AuthLayout;
