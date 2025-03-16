import {ReactNode} from 'react';
import FirebaseProvider from './firebase-provider';
import React from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps) => {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};

export default AuthProvider;
