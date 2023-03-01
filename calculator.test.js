const Calculator = require('./calculator');
describe('calculator', () => {
    test('add', () => {
        const calculator = new Calculator();
        calculator.add(1);
        expect(calculator.value).toBe(1);
        calculator.add(2);
        expect(calculator.value).toBe(3);
        calculator.add(3);
        expect(calculator.value).toBe(6);
    });
    test('subtract', () => {
        const calculator = new Calculator();
        calculator.subtract(4);
        expect(calculator.value).toBeLessThan(0);
        calculator.subtract(3);
        expect(calculator.value).toBe(-7);
        calculator.subtract(2);
        expect(calculator.value).toBe(-9);
    });
    test('multiply', () => {
        const calculator = new Calculator();
        calculator.multiply(4);
        expect(calculator.value).toBe(0);
        calculator.multiply(3);
        expect(calculator.value).toBe(0);
        calculator.multiply(2);
        expect(calculator.value).toBe(0);
    });
    test('divide', () => {
        const calculator = new Calculator();
        calculator.divide(4);
        expect(calculator.value).toBe(0);
        calculator.divide(3);
        expect(calculator.value).toBe(0);
        calculator.divide(2);
        expect(calculator.value).toBe(0);
    });
});