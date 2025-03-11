import {ReactNode} from 'react';
import React from 'react-native';
import {SafeAreaView} from 'react-native';

interface BaseViewProps {
  children: ReactNode;
}

const BaseView = ({children}: BaseViewProps) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default BaseView;
