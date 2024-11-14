import icon from '@assets/blogImg.png';
import type { Meta, StoryObj } from '@storybook/react';

import { CircleIcon } from './CircleIcon';

const meta = {
  title: 'UI/CircleIcon',
  component: CircleIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwitterLight: Story = {
  args: {
    src: icon,
    alt: 'alt',
  },
};
