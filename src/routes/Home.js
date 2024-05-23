import React from 'react';
import styles from './Home.module.css';

const Home = () => {
	return (
		<div>
			<h1 className={styles.Header}>Home:</h1>
			<h1 className={styles.Paragraph}>
				Project Title <br></br>
				Credits <br></br>

				Trailer <br></br>
				Project Description <br></br>
				Screenshots <br></br>
			</h1>
		</div>
	);
};

export default Home;