import React, { useState, useEffect } from 'react';
import quizData from './quizData';
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, Box, Typography } from '@mui/material';
import { Money } from "@mui/icons-material";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    // Shuffle options for the current question
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const currentQuestion = quizData[currentQuestionIndex];
    setShuffledOptions(shuffleArray(currentQuestion.options));

    // Reset feedback when moving to the next question
    setFeedback('');
  }, [currentQuestionIndex]); // Triggered when currentQuestionIndex changes

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    const complexity = quizData[currentQuestionIndex].complexity || 1; // Default to 1 if complexity is missing
    
    // Map complexity levels to coin values
    let coinReward = 0;
    if (complexity === 'easy') {
      coinReward = 1; // Easy
    } else if (complexity === 'medium') {
      coinReward = 2; // Medium
    } else if (complexity === 'hard') {
      coinReward = 3; // Hard
    }

    if (selectedOption === correctAnswer) {
      setScore(prevScore => prevScore + 1);
      setCoins(prevCoins => prevCoins + coinReward); // Add coins based on mapped complexity
      setFeedback('Correct!');
    } else {
      setFeedback(`Wrong! The correct answer is: ${correctAnswer}`);
    }

    // Move to next question after feedback
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedOption(null); // Clear selected option for the next question
      } else {
        setFeedback(`Quiz complete! Your score is: ${score} / ${quizData.length}`);
      }
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white text-black rounded-lg shadow-lg">
      <Typography variant="h4" className="text-center mb-6 text-black"></Typography>

      <Box className="mb-6">
        {/* Coin Display with Animation */}
        <Typography variant="h6" className="animate-bounce">
          <Money className="animate-bounce" /> ${coins}
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" className="text-lg mb-2">{quizData[currentQuestionIndex].question}</Typography>
        <FormControl component="fieldset" className="w-full">
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {shuffledOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                className="mb-3"
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="w-full py-2 text-lg"
      >
        Submit
      </Button>

      {feedback && (
        <Typography
          variant="body1"
          className={`mt-4 text-center ${feedback.startsWith('Wrong') ? 'text-red-500' : 'text-green-500'}`}
        >
          {feedback}
        </Typography>
      )}

      <div className="mt-4 text-center">
        <Typography variant="body2">
          Question {currentQuestionIndex + 1} of {quizData.length}
        </Typography>
      </div>
    </div>
  );
};

export default Quiz;
