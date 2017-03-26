import debuggerable from 'debug';
import { Observable } from 'rxjs';
import { generateCell, insertPlayer } from './reactive/map';
import { moveRight } from './reactive/moves';
import { calculateProfile, generatePlayer } from './reactive/profile';

const playerLog = debuggerable('Player');
const mapLog = debuggerable('Map');

const player = generatePlayer();
const cellA = generateCell({ award: 1, move: 1, name: 'cellA' });
const cellB = generateCell({ award: 1, move: 3, name: 'cellB' });
const cellC = generateCell({ award: 3, move: 1, name: 'cellC' });
const cellPlayer = generateCell({ award: 0, move: 0, name: 'Player' });
const map = [cellB, cellA, cellA, cellC, cellC, cellB, cellA];

const moves$ = Observable.from([moveRight(), moveRight()]);

const playerCoordinates$ = moves$
  .map( (df) => {
    return { x: player.x + df.x };
  });  // пересчет координат

const player$ = playerCoordinates$
  .map( calculateProfile(map)(player) )
  .startWith({ x: 0 });

player$.subscribe( () => {
  const currentX = player.x;
  mapLog(insertPlayer(map, cellPlayer, currentX));
}, null, () => playerLog(player),
);
