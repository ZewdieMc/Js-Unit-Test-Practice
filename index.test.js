const stringLength = require("./index");
test("use non-empty string", () => {
  //task1
  expect(stringLength("a")).toBe(1);
  expect(stringLength("abc")).toBe(3);

  //task2
  expect(() => stringLength("")).toThrow('use non-empty string');
});