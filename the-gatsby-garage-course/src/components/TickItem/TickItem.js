import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const TickItem = ({ children }) => {
  return (
    <div className="my-4 flex items-center">
      <div className="mr-4">
        <FontAwesomeIcon icon={faCircleCheck} className="text-[30px] text-emerald-900"/>
      </div>
      <div>{children}</div>
    </div>
  );
};
