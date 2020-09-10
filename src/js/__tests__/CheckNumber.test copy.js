import CheckNumber from '../CheckNumber';

test.each([
  ['correctly', '371449635398431', true],
  ['correctly', '30569309025904', true],
  ['correctly', '6011111111111117', true],
  ['correctly', '3530111333300000', true],
  ['correctly', '5555555555554444', true],
  ['correctly', '4111111111111111', true],
  ['wrong', '41345345345345', false],
  ['wrong', '66363452456345', false],
  ['wrong', '797874324675', false],

])(('Card`s number should be %s'), (_, number, expected) => {
  const chechNumber = new CheckNumber();
  expect(chechNumber.luhnCheck(number)).toBe(expected);
});
