import React from 'react';
import styles from './Home.module.css';
import extra_styles from "./Extra.module.css"

const Home = () => {
	return (
		<div>
			<h1 className={styles.Header}>
				The Midas Game (subject to change)
			</h1>

			<h2 className={styles.Header}>
				WebGL
			</h2>
			<p className={styles.Paragraph}>
				Link
			</p>

			<h2 className={styles.Header}>
				Source
			</h2>
			<p className={styles.Paragraph}>
				Link
			</p>

			<h2 className={styles.Header}>
				Description
			</h2>
			<p className={styles.Paragraph}>
				Description Text
			</p>

			<h2 className={styles.Header}>
				Screenshots Placeholder
			</h2>

			<h2 className={styles.Header}>
				Trailer
			</h2>
			<div className={extra_styles.Content}>
				<div className={extra_styles.Wrapper}>
					<body>
						<iframe title="Project Trailer" width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
						</iframe>
					</body>
					<body>
						
					</body>
					<body>
						
					</body>
					<body>
						
					</body>
					<body>
						
					</body>
					<body>
						
					</body>
				</div>
			</div>

			<h2 className={styles.Header}>
				Credits
			</h2>
			<div className={extra_styles.Content}>
				<div className={extra_styles.Wrapper}>
					<body>
						<h3 className={extra_styles.Subheader}>
							JJ Hartog
						</h3>
						<p className={extra_styles.Paragraph}>
							Role
						</p>
					</body>
					<body>
						<h3 className={extra_styles.Subheader}>
							Dillon Evans
						</h3>
						<p className={extra_styles.Paragraph}>
							Role
						</p>
					</body>
					<body>
						<h3 className={extra_styles.Subheader}>
							Emma Pates
						</h3>
						<p className={extra_styles.Paragraph}>
							Role
						</p>
					</body>
				</div>
			</div>
		</div>
	);
};

export default Home;