import type { Meta, StoryObj } from '@storybook/react';

import { SocialIcon } from './SocialIcon';

const meta = {
  title: 'UI/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwitterLight: Story = {
  args: {
    name: 'twitter',
    bgColor: 'light',
  },
};

export const TwitterDark: Story = {
  args: {
    name: 'twitter',
    bgColor: 'dark',
  },
};

export const InstagramLight: Story = {
  args: {
    name: 'instagram',
    bgColor: 'light',
  },
};

export const InstagramDark: Story = {
  args: {
    name: 'instagram',
    bgColor: 'dark',
  },
};

export const FacebookLight: Story = {
  args: {
    name: 'facebook',
    bgColor: 'light',
  },
};

export const FacebookDark: Story = {
  args: {
    name: 'facebook',
    bgColor: 'dark',
  },
};

export const LinkedInLight: Story = {
  args: {
    name: 'linkedin',
    bgColor: 'light',
  },
};

export const LinkedInDark: Story = {
  args: {
    name: 'linkedin',
    bgColor: 'dark',
  },
};
