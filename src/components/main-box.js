
import React from 'react';

import InputBox from './input-box';
import TopText from './top-text';
import TopPad from './top-pad';
import BotPad from './bot-pad';


export default class MainBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswer: `${props.correctAnswer}`,
			lastAnswer: 0
		}
	}
	render() {
		const diff = Math.abs(this.state.correctAnswer - this.state.lastAnswer);
		const answerHint = function (num) {
			if (num < 15) {
				return `<p className='help-text'>Kinda Hot</p>`
			} else if (num < 5) {
				return `<p className='help-text'>Hot</p>`
			} else if (this.state.lastAnswer === 0) {
				return `<p className='help-text'>Guess a number</p>`
			}
			return `<p className='help-text'>Cold</p>`
		};
		let hint = answerHint(diff);
		return (
			<div className='main-box'>
				<TopText />
				<TopPad hint={() => this.setState({ hint })} />
				<InputBox onChange={number => this.setState(number)} />
				<BotPad />
			</div>
		)
	}
}
