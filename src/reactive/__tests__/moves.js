const { moveRight } = require('../moves');

describe('Moves section', () => {
  describe('moveRight', () => {
    it('returns diff coordinates', () => {
      expect(moveRight()).toEqual({ x: 1 });
    })

  })
})
