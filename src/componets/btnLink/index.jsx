import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = ({ href, name }) => {
  return (
    <>
      <Link
        className="text-xl w-auto px-4 py-1 bg-rose-400 hover:bg-rose-500 hover:text-slate-200 duration-300 text-center rounded"
        to={href}
      >
        {name}
      </Link>
    </>
  );
};

export default BtnLink;
