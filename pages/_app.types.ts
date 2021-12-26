import React from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}
