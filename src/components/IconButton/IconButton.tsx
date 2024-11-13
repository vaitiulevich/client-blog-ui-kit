interface IconButtonProps {
  onClick?: () => void;
  icon: { src: string; alt: string };
  disabled?: boolean;
}

export const IconButton = ({
  icon,
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={`storybook-button cursor-pointer flex items-center bg-transparent focus:outline-none`}
      disabled={disabled}
      {...props}
    >
      {icon && <img src={icon.src} alt={icon.alt} />}
    </button>
  );
};
