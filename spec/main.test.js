/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Cell from '../src/components/Cell.jsx';

// Setup / Teardown for tests
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without input character', () => {
  act(() => {
    render(<Cell />, container);
  });
  expect(container.textContent).toEqual(String.fromCodePoint(0));

  act(() => {
    render(<Cell character={65}/>, container);
  });
  expect(container.textContent).toBe('A');
});
