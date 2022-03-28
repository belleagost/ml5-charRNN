// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('models/the-full-bee-movie-script/', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Generate content
rnn.generate({ seed: 'According to all known laws of aviation, ' }, (err, results) => {
  console.log(results);
});