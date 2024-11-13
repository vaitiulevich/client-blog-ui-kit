import { ControlledInput } from '@components/ControlledInput/ControlledInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/ControlledInput',
  component: ControlledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Name',
    value: '',
    onChange: fn(),
  },
} satisfies Meta<typeof ControlledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    value: 'SomeName',
    disabled: true,
  },
};
