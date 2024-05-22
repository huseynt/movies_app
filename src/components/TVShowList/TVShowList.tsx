import {TVShowListItem} from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";
import {ITvShowItem} from "../../models/tvShowItem.ts";

interface TVShowListProps {
    tvShowList: ITvShowItem[];
    onClickItem: (tvShow: ITvShowItem) => void;
}

export function TVShowList({tvShowList, onClickItem}: TVShowListProps) {
    return (
        <div>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                {
                    tvShowList.map((tvShow: ITvShowItem) => (
                        <span className={s.tv_show_item} key={tvShow.id}>
                          <TVShowListItem  tvShow={tvShow} onClick={onClickItem}/>
                      </span>
                    ))
                }
            </div>
        </div>
    );
}
