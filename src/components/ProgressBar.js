import React from 'react'

const ProgressBar = ({bgcolor,progress}) => {
	
	const Parentdiv = {
		height:  '10px',
		width: '80%',
		backgroundColor: '#e6e6e6',

		marginRight: 90,
		
	}
	
	const Childdiv = {
		height:  '10px',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	}
	
	const progresstext = {

		color: 'White',
		fontWeight: 300,
		fontSize: '10px',
		alignItem: 'center',
		display: 'flex',
		justifyContent: 'center'
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}`}</span>
	</div>
	</div>
	)
}

export default ProgressBar;
