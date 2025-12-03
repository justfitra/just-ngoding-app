interface CardTextProps {
  title?: string;
  description?: string;
}
const CardText = ({ title, description }: CardTextProps) => {
  return (
    <div className="w-full border-gray-800 border p-6 rounded-md flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default CardText;
