import React from "react";

const GridContainer = ({ children }) => {
  return (
    <div className="py-4 grid grid-cols-3 gap-2 gap-y-4 xs:grid-cols-1 md:grid-cols-2 justify-items-center">
      {children}
    </div>
  );
};

export default GridContainer;
