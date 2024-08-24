import Daemon from './classes/Daemon';
import Magician from './classes/Magician';

const heroes = [new Magician('Ma'), new Daemon('Da')];

heroes[0].stoned = false;
heroes[0].attack = 4;
heroes[1].stoned = true;
heroes[1].attack = 4;

console.log(heroes);
