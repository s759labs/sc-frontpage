import React from 'react';
import PropTypes from 'prop-types';
import useScreenSize from "../../hooks/useScreenSize";
import SlidePresentationWideScreen from "./SlidePresentationWideScreen";
import SlidePresentationSmallScreen from "./SlidePresentationSmallScreen";


const triggerBreakpoint = 750;
const SlidePresentation = ({cardProps,data,...props}) => {

  const screen = useScreenSize();

  return (
    <div className="flex w-full">
      {
        screen.width > triggerBreakpoint ?
          <SlidePresentationWideScreen data={data} />
          :
          <SlidePresentationSmallScreen data={data} />
      }
    </div>
  );
};

SlidePresentation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    content: PropTypes.any
  })),
  cardProps: PropTypes.object
};

export default SlidePresentation;
