import { DIRECTIONS, GRID_SIZE } from '../constants/grid';

export function parsePlacement(placementStr) {
    let maxArrayGridSize = GRID_SIZE - 1;

    if (!placementStr || typeof placementStr !== 'string') {
        return { error: 'Placement must be a string in the format "x,y DIRECTION"' };
    }

    const parts = placementStr.trim().split(/\s+/);
    if (parts.length !== 2) {
        return { error: 'Invalid format. Use: "x,y DIRECTION" (example: "1,1 NORTH")' };
    }

    const coords = parts[0].split(',');
    if (coords.length !== 2) return { error: 'Invalid coordinates. Use: "x,y"' };

    const x = Number.parseInt(coords[0], 10);
    const y = Number.parseInt(coords[1], 10);
    const dir = parts[1].toUpperCase();

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return { error: 'x and y must be integers.' };
    }

    if (x < 0 || x > maxArrayGridSize || y < 0 || y > maxArrayGridSize) {
        return { error: `x and y must be between 0 and ${maxArrayGridSize} inclusive.` };
    }
    if (!DIRECTIONS.includes(dir)) {
        return { error: `Direction must be one of: ${DIRECTIONS.join(', ')}` };
    }

    return { x, y, direction: dir };
}

