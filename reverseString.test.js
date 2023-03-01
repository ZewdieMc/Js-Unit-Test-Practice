const reverseString = require('./reverseString');
test('reverse string', () => {
  expect(reverseString('abc')).toMatch('cba');
  expect(reverseString('a')).toBe('a');
  expect(reverseString('')).toBe('');
});