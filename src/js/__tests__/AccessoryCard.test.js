import Accessory from "../AccessoryCard";

test.each([
  ['American Express','34', 'AmericanExpress'],
  ['American Express','37', 'AmericanExpress'],
  ['Visa','4', 'Visa'],
  ['Master Card','51', 'MasterCard'],
  ['Master Card','55', 'MasterCard'],
  ['JCB','35', 'JCB'],
  ['Diners Club','30', 'DinersClub'],
  ['Diners Club','36', 'DinersClub'],
  ['Diners Club','38', 'DinersClub'],
  ['Discover','65', 'Discover'],
  ['Undefined','6', undefined],

])(('Card`s name should be %s'), (_, number, expected) => {
  const accessory = new Accessory();
  expect(accessory.belonging(number)).toBe(expected);
})
