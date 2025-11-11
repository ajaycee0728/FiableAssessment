import { ROTATION_ANGLE } from "../constants/grid";

export function rotationFor(direction) {
  return ROTATION_ANGLE[direction] || 0;
}