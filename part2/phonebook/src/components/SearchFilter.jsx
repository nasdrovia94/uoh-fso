const SearchFilter = ({ value, onChange }) => {
    return (
      <div>
        filter: <input value={value} onChange={onChange} />
      </div>
    );
  };
  
  export default SearchFilter;
  