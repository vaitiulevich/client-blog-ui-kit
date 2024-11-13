import arrow from '@assets/arrow.svg';
import { Button } from '@components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: 'bg-yellow',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    backgroundColor: 'bg-light',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button',
    icon: { src: arrow, alt: 'arrow' },
  },
};
