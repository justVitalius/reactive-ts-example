export interface CellAttributes {
    award: number;
    move: number;
    name: string;
}

export interface GeneratedCell {
    award: number;
    move: number;
    inspect(): string;
}
export function generateCell({ award, move, name }: CellAttributes): GeneratedCell {
    return {
      award,
      move,
      inspect: () => name,
    };
}

export function insertPlayer(map: GeneratedCell[], cellPlayer: GeneratedCell, x: number): GeneratedCell[] {
    return map.slice(0, x).concat(cellPlayer).concat(map.slice(x + 1, map.length));
}
