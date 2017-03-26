/* istanbul ignore next */
function generateCell({ award, move, name }) {
  return {
    award,
    move,
    inspect: () => name,
  }
}

const cellA = generateCell({ award: 1, move: 1, name: 'cellA' });
const cellB = generateCell({ award: 1, move: 3, name: 'cellB' });
const cellC = generateCell({ award: 3, move: 1, name: 'cellC' });
const cellPlayer = generateCell({ award: 0, move: 0, name: 'Player' });

const map = [cellB, cellA, cellA, cellC, cellC, cellB, cellA];
let player = {
  awards: 0,
  moves: 0,
  x: 0,
  cells: [],
};

const mover = (map) => (player) => () => {
  const currentCell = map[player.x];
  return Object.assign(player, {
    awards: player.awards + currentCell.award,
    moves: player.moves + 1,
    x: player.x + currentCell.move,
    cells: player.cells.concat(currentCell),
  });
};

const move = mover(map)(player);
console.log('==========================');
console.log(map);
move();
move();
move();
console.log('==========================');
console.log(player);