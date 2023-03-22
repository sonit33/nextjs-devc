import * as React from "react";
import Banner from "../components/Banner";
import FeatureSection from "../components/FeatureSection";
import NavigationBar from "../components/NavigationBar";
import StackedFlyoutMenu from "../components/StackedFlyoutMenu";

const Index = () => {
  return (
    <>
      <Banner />
      <NavigationBar />
      <StackedFlyoutMenu />
      <FeatureSection />
    </>
  );
};

export default Index;
