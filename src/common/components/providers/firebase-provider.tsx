import {ReactNode, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface FirebaseProviderProps {
  children: ReactNode;
}
const FirebaseProvider = ({children}: FirebaseProviderProps) => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return children;
};

export default FirebaseProvider;
