import Character from '../classes/Character';
import Daemon from '../classes/Daemon';
import Magician from '../classes/Magician';

test('make name error', () => {
  expect(() => {
    new Magician('M');
  }).toThrow();
});

test('make type error', () => {
  expect(() => {
    new Character('Da', 'Daemon1');
  }).toThrow();
});

test('method set attack', () => {
  const hero = new Magician('Ma');
  hero.stoned = true;
  hero.attack = 4;
  const result = {
    name: 'Ma',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 6,
    defence: 40,
    _stoned: true,
  };

  expect(hero).toEqual(result);
});

test('method set attack 0', () => {
  const hero = new Magician('Ma');
  hero.attack = 1024;
  const result = {
    name: 'Ma',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 0,
    defence: 40,
    _stoned: false,
  };

  expect(hero).toEqual(result);
});

test('method get attack', () => {
  const hero = new Daemon('Da').attack;
  const result = 10;

  expect(hero).toEqual(result);
});
