interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'full';
  label: string;
  onClick?: () => void;
  icon?: { src: string; alt: string };
  disabled?: boolean;
}

export const Button = ({
  size = 'medium',
  backgroundColor = 'bg-yellow',
  label,
  icon,
  disabled = false,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    full: 'py-2 px-4 text-base w-full',
  };

  const defStyle = `${backgroundColor} ${sizeClasses[size]} text-dark transition duration-300 hover:bg-yellowHover`;

  let mode = defStyle;

  if (icon) {
    mode = 'flex items-center ' + defStyle;
  }

  return (
    <button
      type="button"
      className={`storybook-button font-sen font-bold ${sizeClasses[size]} ${mode} focus:outline-none focus:ring-2`}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && (
        <span className="ml-2">
          <img src={icon.src} alt={icon.alt} />
        </span>
      )}
    </button>
  );
};
