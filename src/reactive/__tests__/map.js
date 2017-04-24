
const { generateCell, insertPlayer } = require("../map");

describe("Map section", () => {
  describe("generateCell()", () => {

    const cellData = { award: 1, move: 1, name: "inspect" };
    const cell = generateCell(cellData);

    it("returns <award> Number attribute", () => {
      expect(cell).toHaveProperty("award", cellData.award);
    });

    it("returns <move> Number attribute", () => {
      expect(cell).toHaveProperty("move", cellData.move);
    });

    describe("inspect()", () => {
      it("returns <cellName> for terminal mode", () => {
        expect(cell.inspect()).toEqual(cellData.name);
      });
    });

  });

  describe("insertPlayer()", () => {
    const cell = generateCell({ award: 1, move: 1, name: "cell" });
    const playerCell = generateCell({ award: 0, move: 0, name: "cellPlayer" });

    const x = 0;
    const map = [cell, cell, cell, cell];
    const expectedMap = [playerCell, cell, cell, cell];

    it("replace <cell> to <playerCell> by <x> coordinate", () => {
      expect(
        insertPlayer(map, playerCell, x),
      ).toEqual(expectedMap);
    });

    it("not changes original <Map>", () => {
      insertPlayer(map, playerCell, x);
      expect(map).toEqual(map);
    });
  });

});
