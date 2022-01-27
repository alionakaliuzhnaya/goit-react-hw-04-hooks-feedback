import {useState} from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import {Container} from "./App.styled"

export default function Feedback(){
  const [good,setGood] =useState(0);
  const [neutral,setNeutral]= useState(0);
  const [bad,setBad] = useState(0);

 const state= {good,neutral,bad}


  const leaveFeedback=(options) =>{
    console.log(options)
   if (options==="good"){
      return setGood(state=>state+1);
    }

    if (options==="neutral"){
      return setNeutral(state=>state+1);}
     
   if(options==="bad"){
   return setBad(state=>state+1);
       }}


   //   const leaveFeedback = event => {
   //  console.log(event )
   //  switch (event) {
   //   
   //    case 'good':
   //      setGood(state=>state+1);
   //      break;
  
   //    case 'neutral':
   //      setNeutral(state=>state+1);
   //      break;

   //      case 'bad':
   //        setBad(state=>state+1);
   //        break;
  
   //    default:
   //      return;
   //  }
   //};

  const countTotalFeedback=()=>{
    let total= good+neutral+bad;
    return total;}


     

     const countPositiveFeedbackPercentage=()=>{
         const positiveFeedback= Math.round((good/countTotalFeedback())*100)+"%";
      return positiveFeedback;};

      return (
        <Container>
        <Section title={"Please leave feedback!"}>
        <FeedbackOptions
        options={Object.keys(state)}
        onClick={leaveFeedback}/>
        </Section>
    
      <Section title="Statistics">
      {countTotalFeedback() === 0 ? (
              <Notification message={'No feedback given'} />
            ) : (
        <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      positiveFeedback={countPositiveFeedbackPercentage()}/>
      )}
      </Section>
      </Container>);
      }
     



  



