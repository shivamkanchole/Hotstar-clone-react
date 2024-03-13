import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="flex items-center  hover:underline underline-offset-8">
      <p>
        <Icon />
      </p>
      <p>{name}</p>
    </div>
  );
}

export default HeaderItem;
