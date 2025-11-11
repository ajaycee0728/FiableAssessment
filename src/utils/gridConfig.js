import { GRID_SIZE } from "../constants/grid";

export function getRows(size = GRID_SIZE) { 
  return Array.from({ length: size }, (_, i) => size - 1 - i);
}
 
export function getCols(size = GRID_SIZE) {
  return Array.from({ length: size }, (_, i) => i);
}