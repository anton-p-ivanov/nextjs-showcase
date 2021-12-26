import React from 'react';

import { AuthLayout } from '../layouts';

import type { MyAppProps } from './_app.types';

import './_app.styles.scss';

const MyApp: React.FC<MyAppProps> = ({Component, pageProps}) => (
  <AuthLayout>
    <Component {...pageProps} />
  </AuthLayout>
);

export default MyApp;
