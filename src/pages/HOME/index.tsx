import React, { FC } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
			lineHeight: `${theme.spacing(16)}px`,
			textAlign: 'center',
			fontSize: '28px',
			cursor: 'pointer',
		},
	},
}));

const Home: FC<{}> = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{['RA', 'FIB', 'record'].map((element, idx) => (
				<StyledButton key={idx}>
					{element === 'record' ? (
						<MicNoneIcon />
					) : (
						<Link
							style={{
								color: '#fff',
							}}
							to={`/${element.toLowerCase()}`}
						>
							{element}
						</Link>
					)}
				</StyledButton>
			))}
		</div>
	);
};

export default Home;
