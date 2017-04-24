import { GeneratedCell } from './map';

interface Player {
    awards: number;
    moves: number;
    x: number;
    cells: GeneratedCell[];
}

export const calculateProfile = (map: GeneratedCell[]) => (player: Player) => () => {
    return Object.assign(player, {
        awards: player.awards + map[player.x].award,
        moves: player.moves + 1,
        x: player.x + map[player.x].move,
        cells: player.cells.concat(map[player.x]),
    });
};

export function generatePlayer(): Player {
    return {
        awards: 0,
        moves: 0,
        x: 0,
        cells: [],
    };
}
