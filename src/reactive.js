const { Observable } = require('rxjs');
const { calculateProfile, generatePlayer } = require('./reactive/profile');
const { moveRight } = require('./reactive/moves');
const { generateCell } = require('./reactive/map');

const player = generatePlayer();
const cellA = generateCell({ award: 1, move: 1, name: 'cellA' });
const cellB = generateCell({ award: 1, move: 3, name: 'cellB' });
const cellC = generateCell({ award: 3, move: 1, name: 'cellC' });
const cellPlayer = generateCell({ award: 0, move: 0, name: 'Player' });
const map = [cellB, cellA, cellA, cellC, cellC, cellB, cellA];

const moves$ = Observable.from([moveRight(), moveRight()]);

const playerCoordinates$ = moves$
  .map( df => {
    return { x: player.x + df.x };
  })  //пересчет координат


const player$ = playerCoordinates$
  .map( calculateProfile(map)(player) )
  .startWith({ x: 0 });

player$.subscribe( player => {
  const currentX = player.x;
  console.log(map.slice(0, currentX).concat(cellPlayer).concat(map.slice(currentX + 1, map.length)))
});
