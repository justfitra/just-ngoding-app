import CardImage from "./card-image";
import CardText from "./card-text";

interface CardProps {
  type?: "with-text" | "with-image" | "simple";
  title?: string;
  description?: string;
  imageUrl?: string;
}

const Card = ({
  type = "with-text",
  title,
  description,
  imageUrl,
}: CardProps) => {
  if (type === "with-text") {
    return (
      <>
        <CardText title={title} description={description} />
      </>
    );
  }

  if (type === "with-image") {
    return (
      <CardImage title={title} image={imageUrl} description={description} />
    );
  }
};

export default Card;
