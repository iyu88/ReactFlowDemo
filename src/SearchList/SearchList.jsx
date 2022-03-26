import "./SearchList.css";
import SearchItem from "../SearchItem/SearchItem";

export default function SearchList() {
  return (
    <>
      <div className="SearchListWrapper">
        {Array(10)
          .fill(null)
          .map((el, i) => {
            return <SearchItem key={i}></SearchItem>;
          })}
      </div>
    </>
  );
}
