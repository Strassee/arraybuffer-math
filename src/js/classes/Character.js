export default class Character {
  constructor(name, type) {
    const types = ['Magician', 'Daemon'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name is not valid');
    }
    if (!types.includes(type)) {
      throw new Error('Type is not valid');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = undefined;
    this.defence = undefined;
    this._stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(distance) {
    let less = (distance - 1) / 10;
    less += (this.stoned ? (Math.log2(distance) * 5) / 100 : 0);
    this._attack *= (less > 1 ? 0 : (1 - less));
  }

  get attack() {
    return this._attack;
  }
}
