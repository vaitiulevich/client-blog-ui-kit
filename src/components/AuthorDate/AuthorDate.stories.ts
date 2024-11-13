import { AuthorDate } from '@components/AuthorDate/AuthorDate';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/AuthorDate',
  component: AuthorDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    author: { control: 'text' },
    date: { control: 'text' },
  },
  args: {
    date: new Date(),
  },
} satisfies Meta<typeof AuthorDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: 'James West',
  },
};

export const CustomAuthor: Story = {
  args: {
    author: 'Alice Johnson',
  },
};

export const WithDifferentDate: Story = {
  args: {
    author: 'Bob Smith',
  },
};
