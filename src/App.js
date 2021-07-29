import React, { useState } from 'react';
import './App.css';

function App() {
	const [buttonText, setButtonText] = useState('Click Me');
	const [numTimesClicked, setNumTimesClicked] = useState(0);

	return (
		<div className='App'>
			<h1>State Exercises</h1>
			<button onClick={() => setNumTimesClicked(numTimesClicked + 1)}>
				{buttonText}
			</button>
			<input
				type='text'
				placeholder='Change button text'
				onChange={event => setButtonText(event.target.value)}
			></input>
			<div className='stateDisplay'>
				<h2>State Values</h2>
				<p>Button Text: {buttonText}</p>
				<p>Number of Times Clicked: {numTimesClicked}</p>
			</div>
		</div>
	);
}

export default App;
