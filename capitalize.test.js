const capitalize = require('./capitalize');
test('capitalize', () => {
  expect(capitalize('abc')).toMatch('Abc');
  expect(capitalize('a')).toBe('A');
  expect(capitalize('')).toBe('');
});