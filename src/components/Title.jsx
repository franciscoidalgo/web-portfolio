import React from 'react';
import '../index.css';

const Title = ({ children, color }) => {
  const textFormat = `${color} text-4xl text-center my-3`;
  return <h1 className={textFormat}>{children}</h1>;
};

export default Title;
