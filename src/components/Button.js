import React from 'react';

export default function Button(props) {
  return (
    <>
      <button onClick={props.func} className={props.class}>
        {props.name}
      </button>
    </>
  );
}
