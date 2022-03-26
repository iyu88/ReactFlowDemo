import "./SearchBar.css";

export default function SearchBar() {
  return (
    <>
      <div className="SearchBarWrapper">
        <input
          className="SearchBarText"
          type="text"
          placeholder="Searchbar here"
        ></input>
      </div>
    </>
  );
}
