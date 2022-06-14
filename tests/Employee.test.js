const Employee = require('../testt');

describe('Employee', () => {
    it('Should return the name of the employee', () => {
        expect(Employee('Connor', 111111, 'connorkfitzsimmons@gmail.com').getName()).toBe('Connor');
    })
});