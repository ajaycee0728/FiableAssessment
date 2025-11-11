import Grid from '../components/Grid';
import { GRID_SIZE } from '../constants/grid';
import { Box, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Grid',
  component: Grid,
};
 
export const DefaultPlacement = {
  render: () => <Grid placement="1,1 NORTH" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement); 
    const inputText = await canvas.findByText(/Input:/);
    await expect(inputText).toBeInTheDocument();

    const parsedText = await canvas.findByText(/x=1 y=1 direction=NORTH/i);
    await expect(parsedText).toBeInTheDocument();
  },
};

export const CornerSouthWest = {
    render: () => <Grid placement="0,0 SOUTH" />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const inputText = await canvas.findByText(/Input:/);
        await expect(inputText).toBeInTheDocument();
    }
}

export const InvalidDirection = {
  render: () => <Grid placement={`${(GRID_SIZE - 1)},${(GRID_SIZE - 1)} UP`} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = await canvas.findByText(/Direction must be one of: NORTH, EAST, SOUTH, WEST/);
    await expect(alert).toBeInTheDocument();
  },
};

export const InvalidCoordinates = {
  render: () => <Grid placement={`${GRID_SIZE},${GRID_SIZE} SOUTH`} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = await canvas.findByText(`x and y must be between 0 and ${(GRID_SIZE - 1)} inclusive.`);
    await expect(alert).toBeInTheDocument();
  },
}; 