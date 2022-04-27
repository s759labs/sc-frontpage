import React from 'react';
import PropTypes from 'prop-types';
import BgTrapez from "../../svgs/BgTrapez";
import Button from "../../Button";

const OnTopBgTrapez = props => {
  return (
    <div className="w-full relative flex items-center justify-center" style={{minHeight: 400, width: "100%"}}>
      <BgTrapez className="absolute -z-10 top-0" width="100%" height="100%"/>

      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className="text-3xl text-primary text-center font-semibold">Hire affordably at Scale</h2>
        <h3 className="text-gray-extra-dark text-center">Getting better results at more affordable price, without any limits!
          Get started in under 5 mins*</h3>
        <div className="flex gap-4">
          <Button>Start Trial</Button>
          <Button outlined>Request Demo</Button>
        </div>
      </div>

    </div>
  );
};

OnTopBgTrapez.propTypes = {

};

export default OnTopBgTrapez;