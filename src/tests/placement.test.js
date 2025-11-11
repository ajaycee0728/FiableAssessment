import { DIRECTIONS, GRID_SIZE } from "../constants/grid";
import { parsePlacement } from "../utils/placement";

describe('placement validation tests', () => {
  let maxArrayGridSize = GRID_SIZE - 1;

  test('input is empty or not a string', () => {
    expect(parsePlacement()).toEqual({
      error: 'Placement must be a string in the format "x,y DIRECTION"',
    });
    expect(parsePlacement(123)).toEqual({
      error: 'Placement must be a string in the format "x,y DIRECTION"',
    });
  });

  test('invalid format (not two parts)', () => {
    expect(parsePlacement('1,1')).toEqual({
      error: 'Invalid format. Use: "x,y DIRECTION" (example: "1,1 NORTH")',
    });
    expect(parsePlacement('1,1 NORTH EXTRA')).toEqual({
      error: 'Invalid format. Use: "x,y DIRECTION" (example: "1,1 NORTH")',
    });
  });

  test('invalid coordinates', () => {
    expect(parsePlacement('1 NORTH')).toEqual({
      error: 'Invalid coordinates. Use: "x,y"',
    });
    expect(parsePlacement('1,2,3 NORTH')).toEqual({
      error: 'Invalid coordinates. Use: "x,y"',
    });
  });

  test('x or y is not an integer', () => {
    expect(parsePlacement('A,2 NORTH')).toEqual({
      error: 'x and y must be integers.',
    });
    expect(parsePlacement('2,NaN EAST')).toEqual({
      error: 'x and y must be integers.',
    });
  });

  test('x or y is out of bounds', () => {
    expect(parsePlacement(`${maxArrayGridSize + 1},2 NORTH`)).toEqual({
      error: `x and y must be between 0 and ${maxArrayGridSize} inclusive.`,
    });
    expect(parsePlacement(`2,${maxArrayGridSize + 1} EAST`)).toEqual({
      error: `x and y must be between 0 and ${maxArrayGridSize} inclusive.`,
    });
    expect(parsePlacement(`-1,2 WEST`)).toEqual({
      error: `x and y must be between 0 and ${maxArrayGridSize} inclusive.`,
    });
  });

  test('direction is invalid', () => {
    expect(parsePlacement('1,1 UP')).toEqual({
      error: `Direction must be one of: ${DIRECTIONS.join(', ')}`,
    });
    expect(parsePlacement('0,0 DOWN')).toEqual({
      error: `Direction must be one of: ${DIRECTIONS.join(', ')}`,
    });
  });
});