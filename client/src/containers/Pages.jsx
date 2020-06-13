import React, { Component, Fragment } from "react";
import "./containers.scss";
import Hero from "../components/Hero";
import Section from "../UI/Section";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import Projects from "./Projects";
import Gallery from "./Gallery";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Section>
          <h1>Welcome my Website.</h1>
          Hey, looks like you found my site. In case you're wondering I've
          created this place in order to put together all my work, thoughts &
          information all in one place for no specific reason (Just wanted to
          have something like this). Anyone who visits this site can get inside
          my mind once I'm completely done with the building process.
        </Section>
        <Projects />
        <Gallery />
      </Fragment>
    );
  }
}

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <Loader />
        </Section>
      </React.Fragment>
    );
  }
}

export class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <h1>Contact</h1>
        </Section>
      </React.Fragment>
    );
  }
}

export class IDCard extends Component {
  render() {
    return <Card>Vraj Shah</Card>;
  }
}