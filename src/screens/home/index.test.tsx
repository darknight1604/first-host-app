import {render, screen} from '@testing-library/react-native';
import HomePage from '.';
import React from 'react-native';

describe('<HomePage />', () => {
  test('render', () => {
    render(<HomePage />);

    expect(screen.getByText('Home page')).toBeOnTheScreen();
  });
});
