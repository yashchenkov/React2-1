import React from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const toolbar = [];
  filters.forEach((elem, index) => {
    const tag = elem === selected ? React.createElement('button', {
      className: 'toolbar-elem selected',
      onClick: onSelectFilter,
      key: index
    }, elem) : React.createElement('button', {
      className: 'toolbar-elem',
      onClick: onSelectFilter,
      key: index
    }, elem);

    toolbar.push(tag);
  });
  return (
	  toolbar
  );
}