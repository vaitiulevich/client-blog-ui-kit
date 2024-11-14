import { useState } from 'react';
import burgerMenu from '@assets/burger-menu.svg';
import closeBurgerMenu from '@assets/close-burger.svg';
import { Button } from '@components/Button/Button';

interface NavItem {
  label: string;
  href: string;
}

interface Locale {
  code: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
  logoLabel: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  locales?: Locale[];
  onLocaleChange?: (locale: string) => void;
}

export const Header = ({
  navItems,
  logoLabel,
  buttonLabel,
  buttonOnClick,
  locales,
  onLocaleChange,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(
    locales ? locales[0].code : null
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale);
    onLocaleChange && onLocaleChange(locale);
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
              {currentLocale && (
                <div className="relative">
                  <select
                    value={currentLocale}
                    onChange={(e) => handleLocaleChange(e.target.value)}
                    className="text-light cursor-pointer bg-darkBG border border-light rounded p-1"
                  >
                    {locales &&
                      locales.map((locale) => (
                        <option
                          key={locale.code}
                          className="cursor-pointe"
                          value={locale.code}
                        >
                          {locale.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
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
            <button onClick={toggleMenu} className="focus:outline-none">
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
