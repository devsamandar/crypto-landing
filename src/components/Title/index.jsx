import React from "react";

function Title({ title, page, text }) {
  return (
    <div className="text-center">
      {title && (
        <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
          {title}
        </span>
      )}
      <h1 className="text-3xl font-medium my-3">{page}</h1>
      {text && <p className="text-slate-400 mt-5 mb-4">{text}</p>}
    </div>
  );
}

export default Title;
