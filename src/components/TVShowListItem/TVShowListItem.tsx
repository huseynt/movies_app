import { SMALL_IMG_COVER_BASE_URL } from "../../config.js";
import s from "./style.module.css";
import {ITvShowItem} from "../../models/tvShowItem.ts";
const MAX_TITLE_CHAR: number = 20;

interface TVShowListItemProps {
    tvShow: ITvShowItem;
    onClick: (tvShow: ITvShowItem) => void;
}

export function TVShowListItem({ tvShow, onClick }: TVShowListItemProps) {

  const onClick_ = () => {
    onClick(tvShow);
  }

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
          {
              tvShow.name.length > MAX_TITLE_CHAR ? tvShow.name.slice(0, MAX_TITLE_CHAR) + '...' : tvShow.name
          }
      </div>
    </div>
  );
}
