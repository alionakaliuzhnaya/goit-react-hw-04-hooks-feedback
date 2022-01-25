import React, { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import {Container} from "./App.styled"



class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  leaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
   
  };

  countTotalFeedback=()=>{
    let total= this.state.good+this.state.neutral+this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage=()=>{
    const positiveFeedback= Math.round((this.state.good/this.countTotalFeedback())*100)+"%";
  return positiveFeedback;};

  render(){
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return(
      <Container>
      <Section title={"Please leave feedback!"}>
      <FeedbackOptions
      options={keys}
      onLeaveFeedback={this.leaveFeedback}/>
      </Section>

    <Section title="Statistics">
    {this.countTotalFeedback() === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
      <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={this.countTotalFeedback()}
    positiveFeedback={this.countPositiveFeedbackPercentage()}/>
    )}
    </Section>
    </Container>);}}
export default App;


