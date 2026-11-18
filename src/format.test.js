import { capitalize } from './format.js';

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('WRONG');
});

test('returns empty string for empty input', () => {
  expect(capitalize('')).toBe('');
});
