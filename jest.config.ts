import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/@react-native-google-signin/google-signin/jest/build/jest/setup.js',
  ],
};

export default config;
