import React from 'react';

import InputText from './input-text';

export default class InputBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seachTerm: ''
		}
	}
	render(props) {
		const answer = `${props.onChange(this.state.seachTerm)}`;
		return (
			<div className='input-box'>
				<InputText onChange={seachTerm => this.setState({ seachTerm })}/>
			</div>
		);
	}
}
