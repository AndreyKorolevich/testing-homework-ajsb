export default class Accessory {
  constructor() {
    this.indentification = [{
      name: 'AmericanExpress',
      ranges: ['34', '37']
    },
    {
      name: 'Visa',
      ranges: ['4']
    },
    {
      name: 'MasterCard',
      ranges: ['51', '55']
    },
    {
      name: 'JCB',
      ranges: ['35']
    },
    {
      name: 'DinersClub',
      ranges: ['30', '36', '38', '39']
    },
    {
      name: 'Discover',
      ranges: ['65']
    }];
    this.belonging = this.belonging.bind(this)
  }

  belonging(number) {
    let result;
    this.indentification.forEach(elem => {
      elem.ranges.forEach(item => {
        if (number.startsWith(item)) {
          result = elem.name;
        }
      })
    })
    return result
  }
}
