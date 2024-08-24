import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this._attack = 10;
    this.defence = 40;
  }
}
