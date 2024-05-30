import React from 'react';
import styles from './Home.module.css';
import extra_styles from "./Extra.module.css"

const Home = () => {
	return (
		<div>
			<h1 className={styles.Header}>
				Midas
			</h1>
			<p className={styles.Paragraph}>
				Description Text
			</p>

			<h2 className={styles.Header}>
				WebGL
			</h2>
			<p className={styles.Paragraph}>
				<a href="https://dillonjevans.github.io/css385-final/">Link to Github</a>
			</p>

			<h2 className={styles.Header}>
				Source
			</h2>
			<p className={styles.Paragraph}>
				<a href="https://github.com/DillonJEvans/css385-final">Link to Github</a>
			</p>

			<h1 className={styles.Header}>
				Media
			</h1>
			<div className={extra_styles.Content}>
				<div className={extra_styles.Wrapper}>
					<body>
						<iframe title="Project Trailer" width="553" height="345" src="https://www.youtube.com/embed/rg7dr95S1x8">
						</iframe>
					</body>
					<body>
						<div className={extra_styles.Center}>
							<img src={process.env.PUBLIC_URL + '/GameplayA.png'} className={extra_styles.Photo} alt="Drone AOE Attack Showcase" />
						</div>
					</body>
					<body>
						<div className={extra_styles.Center}>
							<img src={process.env.PUBLIC_URL + '/GameplayB.png'} className={extra_styles.Photo} alt="Laser Hazards on Cooldown" />
						</div>
					</body>
					<body>
						<div className={extra_styles.Center}>
							<img src={process.env.PUBLIC_URL + '/GameplayC.png'} className={extra_styles.Photo} alt="Laser Hazards Active" />
						</div>
					</body>
					<body>
						<div className={extra_styles.Center}>
							<img src={process.env.PUBLIC_URL + '/GameplayD.png'} className={extra_styles.Photo} alt="Player at the end of their run" />
						</div>
					</body>
					<body>
						<div className={extra_styles.Center}>
							<img src={process.env.PUBLIC_URL + '/GameplayE.png'} className={extra_styles.Photo} alt="Enemy firing at player" />
						</div>
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
							Environment & Gameplay Interactions
						</p>
					</body>
					<body>
						<h3 className={extra_styles.Subheader}>
							Dillon Evans
						</h3>
						<p className={extra_styles.Paragraph}>
							Player Controls, Enemy AI, & UI
						</p>
					</body>
					<body>
						<h3 className={extra_styles.Subheader}>
							Emma Pates
						</h3>
						<p className={extra_styles.Paragraph}>
							Art, Animations, & Base Gameplay
						</p>
					</body>
				</div>
			</div>
		</div>
	);
};

export default Home;