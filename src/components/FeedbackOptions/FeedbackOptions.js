import React from 'react';
import PropTypes from 'prop-types';
import {BottonList, FeedbackBotton} from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <BottonList >
      {options.map((option, index) => {
        return (
          <li key={index}>
            < FeedbackBotton
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </ FeedbackBotton>
          </li>
        );
      })}
    </BottonList>
  </div>
);

                
                  
FeedbackOptions.propTypes={
options:PropTypes.arrayOf(PropTypes.string.isRequired)

}
export default FeedbackOptions