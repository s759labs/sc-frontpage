import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Features from "../../src/components/Common-Section-style/Features/Features";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import cultureFit from "/assets/platforms/Hire-the-best-fit for-your-culture.png";
import findTheMotivation from "/assets/platforms/Find the motivation.png";
import constants from "../../src/Constants/Constants";
import CommonHead from "../../src/components/CommonHead";

const Platform = () => {
  return (
    <div>
      <CommonHead title="Psychometric Assessments"
                  metaDescription="Hire with evidence and build great teams using SkillCounty Assessment Platform that works for any role. In addition to assessing a candidate’s skills, SkillCounty enables you to measure a candidate’s fit using psychometric assessments."
      />
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        <Features featureData={featureData} />
        <OtherPlatformTab pageInfo={constants.psychometricAssessments} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src={cultureFit} alt="Hire the best fit for your culture" width="700px" height="400px"/>,
    heading: "Hire the best fit for your culture!",
    description: "Assesses how a candidate’s values and behaviors align with your company’s  values and behaviors, so you can evaluate if this candidate is set up for success in the role you are about to offer them.",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={findTheMotivation} alt="Find the motivation" width="700px" height="400px"/>,
    heading: "Find the motivation",
    description: "Once you zero-in on the potential candidates, finding out what motivates them is critical to the offer process. SkillCounty offers assessments to gauge the extent to which your candidates' expectations align with your job offer. This helps you craft an offer that resonates with the candidates and also gauge what it will take to retain them in future.",
    direction: "flex-col xl:flex-row-reverse"
  }
];

const tabData = [
  {
    id: 1,
    heading: "Team Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  },
  {
    id: 2,
    heading: "ATS Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  },
  {
    id: 3,
    heading: "Workspace",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  }
];

const topRawData = {
  heading: "Psychometric Assessments",
  description: "Align skills, culture and motivation for hiring the best and setting them up for success",
  descriptionTitle: "Go beyond skills and assess company-fit by getting more into a candidate’s personality",
  image: <Image src="/images/platform/thinking-adult-man.png" alt="thinking adult man" height="747px" width="946px"/>,
  imagePosition: "top-24 md:top-16 xl:top-28"
}



