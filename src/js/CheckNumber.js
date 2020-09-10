export default class CheckNumber {
  constructor(view, accessoryCard) {
    this.view = view;
    this.accessoryCard = accessoryCard;
    this.arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    this.belonging = this.belonging.bind(this);
    this.validate = this.validate.bind(this);
  }

  start() {
    this.view.handlingForm(this.validate);
    this.view.addLisner(this.belonging);
  }

  luhnCheck(numberCard) {
    let len = numberCard.length;
    let bit = 1;
    let sum = 0;
    let val;
    while (len) {
      len -= 1;
      val = parseInt(numberCard.charAt(len), 10);
      /* eslint-disable */
      sum += (bit ^= 1) ? this.arr[val] : val;
    }
    return sum && sum % 10 === 0;
  }

  validate(event) {
    event.preventDefault();
    const check = this.luhnCheck(event.target.text.value);
    if (check) {
      event.target.text.dataset.id = 'valide';
    } else {
      event.target.text.dataset.id = 'invalide';
    }

    this.view.showCheckNumber(check);
  }

  belonging(event) {
    const number = event.target.value;
    event.preventDefault();
    const bank = this.accessoryCard.belonging(number);
    this.view.deleteOpacity();
    if (bank) {
      this.view.hidden(bank);
    }
  }
}
