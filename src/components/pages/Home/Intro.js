import React from 'react';
import CallToActionBtn from "../../Button/CallToActionBtn";
import styles from "./intro.module.css";
import clsx from "clsx";
import TestDemoTop from "./TestDemoTop";
import Link from "next/link";

import commonStyles from "./Home.module.css";
import Button from "../../Button";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../../../store/reducers/homeReducer/homeReducerActions";

const Intro = () => {

  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));

  return (
    <div className={clsx(commonStyles.intro, "sm:pt-40 md:pt-48 lg:pt-0 xl:pt-0")}>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-around gap-1 items-center text-dark " style={{minHeight: "100vh"}}>
        <div className="flex w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col items-center sm:items-center md:items-center lg:items-start gap-y-4 -mt-16 pl-5">
          <div>
            <h1 className={clsx("text-4xl text-center " +
              "md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl" +
              " lg:text-left xl:text-left 2xl:text-left " +
              "px-1 rounded", styles.textShadow)} style={{background:"rgba(255,255,255,.3)"}}>
              Hire with <strong className="text-secondary">Evidence!</strong></h1>
          </div>

          <div >
            <h2 className={clsx("text-xl text-center md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center lg:text-left xl:text-left 2xl:text-left px-1 rounded", styles.textShadow,)}
                style={{background: "rgba(255,255,255,0.3)"}}>
              Measure skill, Assess personality & Fit
            </h2>
          </div>

          <div>
            <p className={clsx(styles.textMaxWidth,  styles.textShadow,
              "text-center lg:text-left xl:text-left 2xl:text-left px-0.5 rounded")}
               style={{background: "rgba(255,255,255,0.3)"}}>
              Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently.
            </p>
          </div>

          <div>
            <div>
              <Button size="lg" variant="outlined" rounded color="primary">
                Start Free Trial
              </Button>
            </div>

            <div className={clsx(styles.textShadow, "text-xs px-3 mt-1 text-center")}>
              or <Button size="sm" onClick={openModal}>Request Demo</Button>
            </div>
          </div>

        </div>

        <div className="flex  lg:w-1/2 xl:w-1/2 2xl:w-1/2" style={{zIndex: 0}}>
          {/*// The Interactive comp goes here*/}
          <TestDemoTop />
        </div>

      </div>
    </div>
  );
};

export default Intro;
