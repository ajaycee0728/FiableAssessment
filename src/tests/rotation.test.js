import { rotationFor } from '../utils/direction';

describe('rotation', () => {
  test('correct rotation', () => {
    expect(rotationFor('NORTH')).toBe(0);
    expect(rotationFor('EAST')).toBe(90);
    expect(rotationFor('SOUTH')).toBe(180);
    expect(rotationFor('WEST')).toBe(270);
  });

  test('0 for unknown direction', () => {
    expect(rotationFor('UP')).toBe(0);
  });
});