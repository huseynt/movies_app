import s from "./style.module.css";
import {ILogoProps} from "../../models/logo.ts";

export function Logo(
    {img, title, subtitle}: ILogoProps
) {
  return (
    <div>
      <div className={s.container}>
        <img src={img} className={s.img} alt={title} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </div>
  );
}
