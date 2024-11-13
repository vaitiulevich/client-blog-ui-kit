import React, { useState } from 'react';
import burgerMenu from '@assets/burger-menu.svg';
import closeBurgerMenu from '@assets/close-burger.svg';
import { Button } from '@components/Button/Button';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
  logoLabel: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  navItems,
  logoLabel,
  buttonLabel,
  buttonOnClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-darkBG text-light font-inter shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">{logoLabel}</h1>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-light font-normal text-sm hover:text-yellowHover"
                >
                  {item.label}
                </a>
              ))}
              {buttonLabel && (
                <Button
                  label={buttonLabel}
                  backgroundColor="bg-light"
                  onClick={buttonOnClick}
                />
              )}
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              {isOpen ? (
                <img className="h-4" src={closeBurgerMenu} alt="close" />
              ) : (
                <img className="h-4" src={burgerMenu} alt="open" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden h-full bg-lightBG">
          <nav className="flex flex-col h-full space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-dark hover:bg-gray-200"
              >
                {item.label}
              </a>
            ))}
            {buttonLabel && (
              <Button
                label={buttonLabel}
                backgroundColor="bg-light"
                onClick={buttonOnClick}
              />
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
