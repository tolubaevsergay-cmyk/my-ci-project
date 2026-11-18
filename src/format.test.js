import { capitalize } from './format.js';

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string for empty input', () => {
  expect(capitalize('')).toBe('');
});
