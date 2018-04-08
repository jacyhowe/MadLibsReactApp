import React, { Component } from 'react';
import MadLibsForm from './madlibs_form';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
        <div className="madLibs-heading">
          <h1>Bottega Mad Libs</h1>
          <div className="madLibs-subheading">
          Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
            </div>
          </div>
          <MadLibsForm name=
          "Max"
          />
          
        </div>
      </div>
    );
  }
}
