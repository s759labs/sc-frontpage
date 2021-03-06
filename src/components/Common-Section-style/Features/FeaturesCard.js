import React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";

const FeaturesCard = ({direction, heading, image, description}) => {
  return (
    <EffectAppearOnView>
      <div className={clsx("flex items-center justify-between mt-12 xl:mt-20", direction)}>
        <div className="w-full flex items-center justify-center p-4 xl:w-1/2">
          {
            image && image
          }
        </div>
        <div className="w-full p-4 xl:w-1/2 flex justify-center items-center">
          <div className="xl:p-12">
            <h2 className="font-bold text-left mb-6 sm:text-4xl text-2xl text-primary">{heading && heading}</h2>
            <p className="text-justify text-dark text-base sm:text-xl mt-4">{description && description}</p>
          </div>
        </div>
      </div>
    </EffectAppearOnView>
  );
};

export default FeaturesCard;

FeaturesCard.propTypes = {
  direction: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  image: PropTypes.node
}
