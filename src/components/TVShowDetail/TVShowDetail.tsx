import s from "./style.module.css";
import {ITvShowItem} from "../../models/tvShowItem.ts";
import {FiveStarRating} from "../FiveStarRating/FiveStarRating.tsx";

export function TVShowDetail({tvShow}: {tvShow: ITvShowItem}) {
    const rating: number = tvShow.vote_average / 2;
  return (
    <div className={s.container}>
      <span className={s.title}>{tvShow.name}</span>
      <FiveStarRating rating={rating} />
      <div>{rating.toFixed(1)} / 5</div>
      <div className="row">
        <div className={`col-sm-12 col-md-8 ${s.description}`}>
          {tvShow.overview}
        </div>
      </div>
    </div>
  );
}
