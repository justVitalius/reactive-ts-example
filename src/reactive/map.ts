interface CellAttributes {
    award: number;
    move: number;
    name: string;
}

interface GenerateCell {
    award: number;
    move: number;
    inspect(): string;
}
export function generateCell({ award, move, name }: CellAttributes): GenerateCell {
    return {
      award,
      move,
      inspect: () => name,
    };
}
