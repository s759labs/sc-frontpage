import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import TopPlatformSection from "../../src/components/pages/Platform/TopSection/TopSection";
import Features from "../../src/components/Common-Section-style/Features/Features";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import OnTopBgTrapez from "../../src/components/pages/Home/OnTopBgTrapez";
import DemoForm from "../../src/components/pages/Home/DemoForm";
import insightfulImage from "/assets/platforms/Insightful-auto-graded-reports.png";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";

const Platform = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        {/*<Features featureData={featureData} />*/}
        <OnTopBgTrapez bgFillColor={"fill-orange-light"} headColor="text-dark" contentColor="text-primary"/>
        <OtherPlatformTab tabData={tabData} />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src={insightfulImage} alt="Insightful auto graded reports" width="700px" height="400px"/>,
    heading: "Insightful auto graded reports",
    description: "SkillCounty’s assessment report is generated by an AI based algorithm that auto-grades candidates’ answers to both objective and subjective questions. These reports offer insight on a summary level with the ability to dig into details. For example, you can see how much time a candidate took to complete the assessment, then you can dig into details like how much time was spent on each question and how many times was it revisited etc. You can even view aggregated cohort level statistics for a given assessment to say, gauge effectiveness of the assessment.",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src="/images/young-businesswoman.png" alt="" width="700px" height="400px"/>,
    heading: "Save notes on a candidate or in a single click shortlist or reject",
    description: "SkillCounty’s assessment reports enable hiring processes and workflows. You can override auto-graded scores, save notes on a candidate, shortlist or reject candidates or manually attach grades on specific skills.",
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
  heading: "AI based Evaluations",
  description: "Save time by relying on automatic AI based evaluations that auto grade answers to both objective and subjective questions",
  descriptionTitle: "Power your hiring process with AI based evaluation and insightful assessment reports ",
  image: <Image src="/images/platform/business-presentation-pointing.png" height="934px" width="929px"/>,
  imagePosition: "top-16 md:top-8"
}

