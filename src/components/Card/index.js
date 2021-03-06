import React from 'react';
import clsx from "clsx";

const Card = React.forwardRef( ({ children,component, fluid,className,...props}, forwardRef) => {
  const RenderComp = component || "div";
  return (
    <RenderComp className={clsx(
      "flex bg-white text-gray-extra-dark p-4 rounded-xl border-1 border-gray-light",
      {"w-full": fluid},
      className, "shadow-xl", )
    }
                ref={forwardRef}
                {...props}>
      {children}
    </RenderComp>
  );
});
Card.displayName = "Card";
Card.propTypes = {

};

export default Card;
