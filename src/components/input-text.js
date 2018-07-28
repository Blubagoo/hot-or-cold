import React from 'react';

export default function (props) {
	return (
		<form>
			<label htmlFor='number'>Guess</label>
			<input
			 	name='number'
			 	aria-controls='number-guessed'
			 	id='number-input'
			 	placeholder='1-100'
			 	onChange={e => props.onChange(e.target.value)} />
		</form>
		)
}
