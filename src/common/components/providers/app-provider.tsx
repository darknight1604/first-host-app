import {ReactNode} from 'react';
import AuthProvider from './auth-provider';
import React from 'react';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({children}: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
