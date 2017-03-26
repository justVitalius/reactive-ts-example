const { calculateProfile, generatePlayer } = require('../profile');

describe('Profile section', () => {
  describe('calculateProfile', () => {

    const map = [
      { award: 1, move: 1 },
      { award: 1, move: 1 },
      { award: 1, move: 1 },
    ];

    const player = {
      awards: 0,
      moves: 0,
      x: 1,
      cells: [],
    }

    it('do not changes a <Map>', () => {
      calculateProfile(map)(Object.assign({}, player))()
      expect(
        map
      ).toEqual(map);
    })

    it('changes a <Player>', () => {
      expect(
        calculateProfile(map)(Object.assign({}, player))()
      ).not.toEqual(player);
    })

    it('adds cells from <Map> to <Player> by <x> coordinate', () => {
      const newPlayer = calculateProfile(map)(Object.assign({}, player))();
      expect(
        newPlayer.cells
      ).not.toEqual([]);
    })

  })

  describe('generatePlayer', () => {
    const expectedPlayer = {
      awards: 0,
      moves: 0,
      x: 0,
      cells: [],
    }

    it('returns empty <Player>', () => {
      expect(
        generatePlayer()
      ).toEqual(
        expectedPlayer
      )
    })
  })
})
