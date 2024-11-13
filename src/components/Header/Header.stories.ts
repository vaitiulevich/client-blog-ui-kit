import { Header } from '@components/Header/Header';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { logoLabel: 'Modsen Client Blog' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact us', href: '#' },
];

export const Default: Story = {
  args: {
    navItems: navItems,
  },
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
};

export const WithButton: Story = {
  args: {
    navItems: navItems,
    buttonOnClick: fn(),
    buttonLabel: 'Video about us',
  },
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
};

export const WithButtonMobile: Story = {
  args: {
    navItems: navItems,
    buttonOnClick: fn(),
    buttonLabel: 'Video about us',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const MobileMenu: Story = {
  args: {
    navItems: navItems,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
