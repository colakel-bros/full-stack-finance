/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

test('renders correctly', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('app')).toBeDefined();
});
