const Employee = require('../index');

describe('Employee', () => {
    describe('getName', () => {
        it('Should return the name of the employee', () => {
            const expected = 'Connor'

            const testEmployee = new Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com');
            const result = testEmployee.getName();

            expect(result).toBe(expected);
        });
    });
});