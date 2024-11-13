interface AuthorDateProps {
  author: string;
  date: Date;
}

export const AuthorDate = ({ author, date }: AuthorDateProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <div className="flex items-center text-sm text-gray-800">
      <a href="#" className="text-blue-600 hover:underline">
        {author}
      </a>
      <span className="ml-4 mr-2">|</span>
      <span className="text-gray-500 ml-2">{formattedDate}</span>
    </div>
  );
};
