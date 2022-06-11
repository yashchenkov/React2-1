import React from 'react';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const toolbar = document.createElement('div');
  toolbar.classList.add('toolbar');

  filters.forEach(filter => {
    const tbElem = document.createElement('div');
    tbElem.classList.add('toolbar-elem');
    if(filter === selected) {
      tbElem.classList.add('selected');
    }
    tbElem.textContent = filter;
    toolbar.appendChild(tbElem);
  });

  return (
	<div>${toolbar}</div>
  );
}