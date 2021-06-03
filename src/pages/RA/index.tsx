/**
 * RA list page
 */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
const Ra: FC<{}> = () => {
	return (
		<>
			<ol>
				<li>
					<Link to={`/ra/${1}`}>1</Link>
				</li>
			</ol>
		</>
	);
};
export default Ra;
