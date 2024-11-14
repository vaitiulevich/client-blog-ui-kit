interface CircleIconProps {
  src: string;
  alt: string;
  className?: string;
}

export const CircleIcon = ({ src, alt, className }: CircleIconProps) => {
  return (
    <div className="rounded-full overflow-hidden ">
      <img
        src={src}
        alt={alt}
        className={`w-20 h-20 object-cover ${className}`}
      />
    </div>
  );
};
