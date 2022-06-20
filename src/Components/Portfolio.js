import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import React, { useState } from 'react';

export default function Portfolio() {
  let [selected, selectFilter] = useState('All');
  const projects = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
  }, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}];
let sortedProjects = projects;
const sorting = () => {
  if(selected !== 'All') {
    sortedProjects = [];
    projects.forEach(elem => {
      if(elem.category === selected) {
        sortedProjects.push(elem);
      }
    });
  } else {
    sortedProjects = projects;
  }
}



  const selectedElem = evt => {
    filters.forEach(filter => {
      selected = document.querySelector('.selected').textContent;
      document.querySelector('.selected').classList.remove('selected');
      evt.target.classList.add('selected');
    });
  }

  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  

  

  return (
  	<div className = "toolbar-container">
  	  <Toolbar
  	    filters={filters}
  	    selected={selected}
  	    onSelectFilter= {(filter) => {
          selectedElem(filter);
          sorting();
        }}
  	  />
      <div className= "projectList-container">
        <ProjectList
          projects={sortedProjects}
        />
      </div>
  	</div>
  	);
}