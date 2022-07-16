import React from 'react';

export default function ProjectList(props) {
  const { projects } = props;
  return (
   <div>{projects.map(o => {
    if(o !== undefined) {
      return <img src={o.img} />
    }
   })}</div>
  );
}