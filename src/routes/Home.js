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
			Play as Midas, the legendary figure from Greek mythology, in this electrifying adventure where every touch turns to gold. In "Midas" you embody the iconic king cursed with the golden touch, but with a modern twist – harnessing the power of electricity to conquer foes and navigate treacherous landscapes. However, you are decaying and need to collect a series of gears around the map to repair your golden form. Your primary arsenal is powerful electricity which you can conduct and direct through your golden hands. You unleash bolts of crackling electricity, striking down adversaries with pinpoint precision or with wide blasts. To aid in your battle, you can deploy Golden Drones – loyal servants crafted from the purest gold – to defend you in combat. These shimmering constructs are conducive to your electric powers, chaining your electricity attacks to overwhelm enemies with relentless force. You'll encounter death pits, lasers, landmines, as well as ranged and melee enemies. Every encounter tests your skill and mastery over your electrifying abilities.
			<br></br><br></br>
			This game is inspired by the Greek myth of King Midas now that, he too, is made of gold. However What makes this game unique is its interpretation of the theme. Instead of adding gold strictly as currency, Midas's ability allows him to conduct electricity, much like how gold is conducive. Another highlight of this game that our team is very proud of is that the vast majority of assets and code are made from scratch. The launch date of this game is May 30th, 2024 using GitHub's pages and WebGL, so any platform capable of accessing the link can run our game. During playtesting, our prototypes and prior game versions received a range of 4 to 4.5 out of 5 stars. Our final version received 4.5 out of 5 stars for its creativity, uniqueness, and replayability.
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
				<a href="https://github.com/DillonJEvans/css385-final">Link to Github (Unity Version: 2023.2.14f1)</a>
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