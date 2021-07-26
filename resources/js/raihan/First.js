import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BannerSlider from './BannerSlider'
import HowItWorks from './HowItWorks'
import Services from './Services'
import TabSlider from './TabSlider'
import TopCategory from './TopCategory'
import WhyUs from './WhyUs'
const First = () => {
    
    return(<>
      <BannerSlider/>
      <TopCategory/>
      <TabSlider/>
      <WhyUs/>
      <HowItWorks/>
      <Services/>
      
    </>)
}

export default First



if (document.getElementById("react-raihan-content")) {
    ReactDOM.render(<First />, document.getElementById("react-raihan-content"));
}