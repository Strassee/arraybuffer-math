import Magician from '../classes/Magician';

test('make Magician', () => {
  const hero = new Magician('Ma');
  const result = {
    name: 'Ma',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 10,
    defence: 40,
    _stoned: false,
  };

  expect(hero).toEqual(result);
});
