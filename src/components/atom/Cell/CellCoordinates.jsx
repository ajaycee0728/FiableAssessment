import Typography from '@mui/material/Typography';

export default function CellCoordinates({ x, y, showCoords }) {
  if (!showCoords) return null;

  return (
    <Typography
      variant="caption"
      sx={{ position: 'absolute', left: 2, bottom: 2, opacity: 0.6 }}
    >
      {`${x},${y}`}
    </Typography>
  );
}