import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export function SearchBar({ onSubmit }:any) {
  function submit(e:any) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value)
   }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
export default SearchBar
