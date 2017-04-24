const { generateCell } = require('../map');

describe('Map section', () => {
  describe('generareCell()', () => {

    const cellData = { award: 1, move: 1, name: 'inspect' };
    const cell = generateCell(cellData);

    it('returns <award> Number attribute', () => {
      expect(cell).toHaveProperty('award', cellData.award);
    })

    it('returns <move> Number attribute', () => {
      expect(cell).toHaveProperty('move', cellData.move);
    })

    describe('inspect()', () => {
      it('returns <cellName> for terminal mode', () => {
        expect(cell.inspect()).toEqual(cellData.name);
      })
    })

  })
})
