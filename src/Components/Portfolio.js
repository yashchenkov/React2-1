import Toolbar from './Toolbar';
import React from 'react';

export default function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const selectedElem = evt => {
  	filters.forEach(filter => {
  	  if(evt.target.classList.contains(filter)) {
  	  	document.querySelector('.selected').classList.remove('selected');
  	  	evt.target.classList.add('selected');
  	  }
  	});
  }

  return (
  	<div><Portfolio />
  	<Toolbar
  	filters={filters}
  	selected="All"
  	onSelectFilter= {etv => selectedElem(etv)}
  	/>
  	</div>
  	);
}