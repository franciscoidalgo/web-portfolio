import React from 'react';

const TextBox = ({ bg = '', color = '', cssClasses = '', pic, children }) => {
  const divClass = `flex flex-col md:flex-row rounded-md my-6 mx-5 p-4 ${bg} ${color} ${cssClasses}`;

  return (
    <div className={divClass}>
      <div className="flex flex-col">{children}</div>
      {pic ? (
        <img src={pic} className="w-32 h-32 rounded-full self-center"></img>
      ) : (
        ''
      )}
    </div>
  );
};

export default TextBox;
