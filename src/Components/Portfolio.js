import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import React, { useState } from 'react';
import {projects} from './projects';

export default function Portfolio() {
  const [selected, selectFilter] = useState('All');
  const [filtered, setFiltered] = useState(projects);

  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  

  

  return (
    <React.Fragment>
  	<div className = "toolbar-container">
  	  <Toolbar
  	    filters={filters}
  	    selected={selected}
  	    onSelectFilter= {(evt) => {
          evt.preventDefault();
          selectFilter(evt.target.textContent);
          setFiltered(
            selected === 'All' ? projects : projects.map(o => {
              if(o.category === selected) {
                return o;
              }
            })
          );
        }}
  	  />
      <div className= "projectList-container">
        <ProjectList
          projects={filtered}
        />
      </div>
  	</div>
    </React.Fragment>
  	);
}