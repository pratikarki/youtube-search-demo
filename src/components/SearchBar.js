import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [input, setInput] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(input);
  }

  return(
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <div style={{display: 'flex'}}>
            <img src="https://www.youtube.com/s/desktop/909f7d8f/img/favicon_48.png" alt="Youtube Logo"/>
            <h3 className="search-heading">Youtube Search</h3>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;