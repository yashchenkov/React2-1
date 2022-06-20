import React from 'react';

export default function ProjectList(props) {
  const { projects } = props;
  const projectList = [];
  projects.forEach(elem => {
    const tag = React.createElement('img', {
      src: elem.img
    }, null);
    projectList.push(tag);
  });
  return (
	  projectList
  );
}