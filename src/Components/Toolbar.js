import React from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  
  return (
	  <ul>{filters.map(o => {
      if(o === selected) {
        return <li className="item selected">
          <button onClick={onSelectFilter}>{o}</button>
        </li>
      }
      return <li className="item">
        <button onClick={onSelectFilter}>{o}</button>
      </li>
    })}</ul>
  );
}