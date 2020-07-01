import React, { Component, Fragment } from "react";
import "./routes.scss";
import Hero from "../components/Hero";
import { Section, GreySection } from "../containers/Section";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Section>
          <h2>A Little About Me</h2>
          <p>
            Hey! My name is <strong>Vraj Shah</strong> and it seems you stumbled
            into my website. To tell you a bit about myself, I love tech in
            general! I really enjoy everything from designing images with
            coloured text to working with websites. This website compiles all I
            love in one place, I hope you have a good time exploring it.
          </p>
        </Section>
        <GreySection>
          <div id="moreAbout">
            <div id="profile"></div>
            <div id="moreAboutText">
              <h2>A Little More</h2>
              <p>
                I'm 18 Years old, based in Vadodara, Gujarat. I'm in my 2
                <sup>nd</sup> Year of Computer Engineering at SVIT, Vasad.
              </p>
              <p>
                Minima non, explicabo libero voluptas inventore labore fugit
                debitis qui saepe esse temporibus commodi reiciendis corporis
                necessitatibus fuga nesciunt quibusdam ratione placeat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, minima natus excepturi maiores
              </p>
            </div>
          </div>
        </GreySection>
        <Section>
          <h2>About this Website.</h2>
          <p>
            I' sure you're liking it here! Well, this website is completely
            designed & built by me using <strong>ReactJS</strong> and basic
            <strong> HTML/CSS</strong> tools and I love to take pride in that as
            most of the websites these days especially the personal one are made
            using templates.
          </p>
          <p>
            However, the pain of messing with CSS for weeks to tweak each
            smallest detail is totally worth it.
          </p>
        </Section>
      </Fragment>
    );
  }
}