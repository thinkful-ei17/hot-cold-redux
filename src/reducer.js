import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './action';

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
  } else if ( action.type === GENERATE_AURAL_UPDATE) {
       const { guesses, feedback } = state;

  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
        const pluralize = guesses.length !== 1;
        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
        if (guesses.length > 0) {
          auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
       }
       return Object.assign({}, state, {auralStatus})
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
