import React from 'react';

const Dropdown = ({ title, items }) => {
  return (
    <div className="dropdown relative inline-block">
      <button className="bg-blue-500 text-white py-2 px-4 rounded inline-flex items-center">
        {title}
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
        {items.map((item, index) => (
          <li key={index} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            <a href="#" className="text-blue-500 hover:text-white">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
