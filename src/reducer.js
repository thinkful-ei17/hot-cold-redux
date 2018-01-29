import {RESTART_GAME, MAKE_GUESS} from './action';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

//pure function - if passed same argument 

export default function(state = initialState, action){
  if(action.type === RESTART_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    });
  } else if (action.type === MAKE_GUESS){
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: changeFeedback(action.guess, state.correctAnswer)
    })
  }
return state
}

function changeFeedback(guess, answer) {
  guess = parseInt(guess, 10);
  if (isNaN(guess)) {
      let feedback;
      feedback = 'Please enter a valid number';
      return feedback;
    }

  const difference = Math.abs(guess - answer);

  let feedback;
  if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }

  return feedback
}

// makeGuess(guess) {
//   guess = parseInt(guess, 10);
//   if (isNaN(guess)) {
//     this.setState({ feedback: 'Please enter a valid number' });
//     return;
//   }

//   const difference = Math.abs(guess - this.state.correctAnswer);

//   let feedback;
//   if (difference >= 50) {
//     feedback = 'You\'re Ice Cold...';
//   } else if (difference >= 30) {
//     feedback = 'You\'re Cold...';
//   } else if (difference >= 10) {
//     feedback = 'You\'re Warm.';
//   } else if (difference >= 1) {
//     feedback = 'You\'re Hot!';
//   } else {
//     feedback = 'You got it!';
//   }

//   this.setState({
//     feedback,
//     guesses: [...this.state.guesses, guess]
//   });
