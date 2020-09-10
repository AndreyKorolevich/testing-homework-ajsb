export default class View {
  constructor(){
    this.listCard = document.querySelectorAll('li');
  }
  handlingForm(callback) {
    document.getElementById('form').addEventListener('submit', callback);
  }

  addLisner(callback) {
    document.getElementById('form').addEventListener('input', callback);
  }

  addOpacity(clas) {
    this.listCard.forEach(elem => {
      if (!elem.classList.contains(clas)) {
        elem.classList.add('hidden')
      }
    })
  }

  deleteOpacity() {
    this.listCard.forEach(elem => {
        elem.classList.remove('hidden')
    })
  }

  hidden(bank) {
    switch (bank) {
      case 'AmericanExpress':
        this.addOpacity('AmericanExpress')
        break;
      case 'Visa':
        this.addOpacity('Visa')
        break;
      case 'MasterCard':
        this.addOpacity('MasterCard')
        break;
      case 'JCB':
        this.addOpacity('JCB')
        break;
      case 'DinersClub':
        this.addOpacity('DinersClub')
        break;
      case 'Discover':
        this.addOpacity('Discover')
        break;
    }
  }

  showCheckNumber(result) {
    let message = document.querySelector('.message');
    if(!message){
      message = document.createElement('div');
      message.classList.add('message');
      document.querySelector('.list').insertAdjacentElement('afterend', message)
    }
    message.textContent = `Card number is ${result}`; 
  }
}
