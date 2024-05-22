import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";

interface IFiveStarRatingProps {
    rating: number;
}

export function FiveStarRating({ rating } : IFiveStarRatingProps) {
  const starList = []
  const starFilledCount = Math.floor(rating) // 3.5 => 3
  const isStarHalf = 5 - Number(rating) >= 0.5 // 3.5 => true
  const starEmptyCount = 5 - Math.floor(rating) - (isStarHalf ? 1 : 0) // 3.5 => 1

  // 3.5 / 5 => 3 filled stars, 1 half star, 1 empty star

  // Push the filled star icons
  for (let i = 0; i < starFilledCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (isStarHalf) {
    starList.push(<StarHalf key="star-half" />);
  }
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return <div style={{display: "flex"}} >{starList}</div>;
}
