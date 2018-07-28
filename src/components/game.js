import React from 'react';


import MainBox from './main-box';

export default class Game extends React.Component {
	constructor(props) {
		const rightNumber = Math.floor((Math.random() * 100) + 1)
		super(props);
		this.state = {
			rightNumber
		}
	}
	render() {
		return (
			<div className='bg-div'>

				<MainBox correctAnswer={this.state.rightNumber} />
			</div>
		)
	}
}
