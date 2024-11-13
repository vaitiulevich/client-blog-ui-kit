interface ControlledInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  color?: 'dark' | 'light';
}

export const ControlledInput = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  disabled = false,
  color = 'dark',
}: ControlledInputProps) => {
  const colorVariants: { [key: string]: string } = {
    dark: 'border-borderColor text-borderColor',
    light: 'border-light text-light',
  };
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`border-[0.5px] ${colorVariants[color]} py-3.5 px-3 focus:outline-none`}
    />
  );
};
