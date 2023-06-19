const Search = ({ searchMovies, setSearchKey }) => {
  return (
    <form className="container mb-4" onSubmit={searchMovies}>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchKey(e.target.value)}
        className="m-3"
      />
      <button className="btn btn-primary ">Search</button>
    </form>
  );
};

export default Search;
