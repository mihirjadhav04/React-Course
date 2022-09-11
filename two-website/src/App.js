import React from "react";
import Footer from "./FooterSection";
import Navbar from "./NavbarSection";
import Jumbotron from "./JumbotronSection";
import Feature from "./FeatureSection";
import Card from "./CardSection";
import NavbarSection from "./NavbarSection";
import JumbotronSection from "./JumbotronSection";
import FeatureSection from "./FeatureSection";
import CardSection from "./CardSection";
import FooterSection from "./FooterSection";

const App = () => {
    return (
        <div>
            <h1>Mihir!</h1>
            <NavbarSection/>
            <JumbotronSection/>
            <FeatureSection/>
            <CardSection/>
            <FooterSection/>
        </div>
    )
}

export default App;
