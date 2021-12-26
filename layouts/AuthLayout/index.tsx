import React from 'react';

import styles from './styles.module.scss';

const AuthLayout: React.FC = ({ children }) => (
  <div className={styles.layout}>
    {children}
    <div className={styles.layout__copyright}>
      © Copyright notice
    </div>
  </div>
);

export default AuthLayout;
