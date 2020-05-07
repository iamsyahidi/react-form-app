import React from 'react';
import './ListWords.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListWords(props) {
	const words = props.words;
	const listWords = words.map((word) => {
		return (
			<div className="row" key={word.key}>
				<p>
					<input
						type="text"
						id={word.key}
						value={word.text}
						onChange={(e) => {
							props.setUpdate(e.target.value, word.key);
						}}
					/>
					<span>
						<FontAwesomeIcon
							className="faicons"
							onClick={() => {
								props.deleteWord(word.key);
							}}
							icon="trash"
						/>
					</span>
				</p>
			</div>
		);
	});
	return (
		<div>
			<FlipMove duration={300} easing="ease-in-out">
				{listWords}
			</FlipMove>
		</div>
	);
}
export default ListWords;
