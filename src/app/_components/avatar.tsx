type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-10 h-10 rounded-full mr-3 border-2 border-polystate-light-blue"
        alt={name}
      />
      <div className="text-sm font-semibold text-polystate-dark">{name}</div>
    </div>
  );
};

export default Avatar;
