module.exports = {
  calculateProfile: (map) => (player) => () => {
    return Object.assign(player, {
      awards: player.awards + map[player.x].award,
      moves: player.moves + 1,
      x: player.x + map[player.x].move,
      cells: player.cells.concat(map[player.x]),
    })
  },

  generatePlayer: () => (
    {
      awards: 0,
      moves: 0,
      x: 0,
      cells: [],
    }
  )
};
