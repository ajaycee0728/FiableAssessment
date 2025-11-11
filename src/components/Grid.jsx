import PropTypes from 'prop-types'; 
import { Box, Paper, Typography, Alert } from '@mui/material';
import { GridTable } from './organism';
import { parsePlacement } from '../utils/placement';
import { GRID_SIZE } from '../constants/grid';

export default function Grid({ placement, cellSize = 60, showCoords = true }) {
  const parsed = parsePlacement(placement);
  const hasError = parsed && parsed.error;

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Typography variant="h6">{GRID_SIZE} × {GRID_SIZE} Grid Placer</Typography>

      {hasError && (
        <Alert severity="error" sx={{ width: '100%', maxWidth: 400 }}>
          {parsed.error}
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 1 }}>
        <GridTable parsed={parsed} cellSize={cellSize} showCoords={showCoords} />
      </Paper>

      <Box sx={{ mt: 1 }}>
        <Typography variant="body2">
          Input: <code>{placement}</code>
        </Typography>
        {!hasError && parsed && (
          <Typography variant="body2">
            Parsed: x={parsed.x} y={parsed.y} direction={parsed.direction}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

Grid.propTypes = {
  placement: PropTypes.string.isRequired,
  cellSize: PropTypes.number,
  showCoords: PropTypes.bool,
};