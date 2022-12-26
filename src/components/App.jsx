import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Feedback/Statistic/Statistic";
import { Notification } from "./Feedback/Notification/Notification";
import { Section } from "./Feedback/Section/Section";
import React, { Component } from "react";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1
    }))
  }
  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
  };

  countPositiveFeedback = () => {
    const total = this.countTotalFeedback();
    const persantage = Math.round((this.state.good / total) * 100);
    return persantage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (<div style={{ textAlign: "center" }}>
      <Section title={"Leave Feedback"}>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <Section title={"Statistic"}></Section>
        {this.countTotalFeedback() ? (<Statistic good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedback()} />) : <Notification message="There is no feedback" />}
      </Section>
    </div>)

  }
}
