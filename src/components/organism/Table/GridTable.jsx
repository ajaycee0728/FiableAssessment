import { Table, TableBody, TableRow } from '@mui/material';
import { GridCell } from '../../molecule'; 
import { GRID_SIZE } from '../../../constants/grid'; 
import { rotationFor } from '../../../utils/direction';

export default function GridTable({ parsed, cellSize, showCoords }) {
  const hasError = parsed && parsed.error;
  const rows = Array.from({ length: GRID_SIZE }, (_, i) => GRID_SIZE - 1 - i);
  const cols = Array.from({ length: GRID_SIZE }, (_, i) => i);

  return (
    <Table sx={{ borderCollapse: 'collapse', minWidth: cellSize * GRID_SIZE }}>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={`row-${r}`} sx={{ height: cellSize }}>
            {cols.map((c) => (
              <GridCell
                key={`cell-${c}-${r}`}
                size={cellSize}
                isObject={!hasError && parsed.x === c && parsed.y === r}
                rotation={!hasError ? rotationFor(parsed.direction) : 0}
                showCoords={showCoords}
                x={c}
                y={r}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}