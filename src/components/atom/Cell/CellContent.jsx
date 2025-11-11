import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function CellContent({ isObject, rotation }) {
  if (!isObject) return null;

  return (
    <Box
      sx={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 180ms ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowUpwardIcon fontSize="small" />
    </Box>
  );
}