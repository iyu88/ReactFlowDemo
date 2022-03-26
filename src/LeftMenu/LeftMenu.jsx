import "./LeftMenu.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchList from "../SearchList/SearchList";

export default function LeftMenu() {
  return (
    <>
      <div className="LeftMenuWrapper">
        <SearchBar></SearchBar>
        <SearchList></SearchList>
      </div>
    </>
  );
}
