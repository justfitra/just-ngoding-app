interface CardImageProps {
  title?: string;
  image?: string;
  description?: string;
}

const CardImage = ({ title, image, description }: CardImageProps) => {
  return (
    <div className="flex  rounded-md cursor-pointer hover:bg-gray-300 hover:p-3 px-1 transition-all ease-in-out w-full ">
      <div>
        <img className="rounded-md" src={image} alt="" />
      </div>
      <div className="ml-4 flex flex-col gap-2">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default CardImage;
