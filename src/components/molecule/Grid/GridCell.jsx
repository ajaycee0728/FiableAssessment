import { TableCell, Box } from '@mui/material';
import { CellContent, CellCoordinates } from '../../atom'; 

export default function GridCell({ size, isObject, rotation, showCoords, x, y }) {
  return (
    <TableCell
      align="center"
      sx={{
        width: size,
        height: size,
        border: '1px solid rgba(0,0,0,0.12)',
        position: 'relative',
        padding: 0,
        backgroundColor: isObject ? 'rgba(25,118,210,0.08)' : 'transparent',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <CellContent isObject={isObject} rotation={rotation} />
      </Box>

      <CellCoordinates x={x} y={y} showCoords={showCoords} />
    </TableCell>
  );
}