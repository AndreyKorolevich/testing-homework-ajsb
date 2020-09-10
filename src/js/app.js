import View from './View';
import CheckNumber from './CheckNumber';
import Accessory from './AccessoryCard';

const view = new View();
const accessoryCard = new Accessory();
const checkNumber = new CheckNumber(view, accessoryCard);

checkNumber.start();
