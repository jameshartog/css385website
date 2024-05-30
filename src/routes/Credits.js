//import styles from './Credits.module.css';
import style_default from './Home.module.css';

const Credits = () => {
    return (
        <div>
            <h1 className={style_default.Header}>References:</h1>
            <h2 className={style_default.Paragraph}>NavMeshPlus</h2>
            <h3 className={style_default.PaddingLess}>Created by h8man</h3>
            <p className={style_default.Paragraph}>
                2D Navmesh package used to generate Navmeshes from scene geometry.<br></br>
                <a href="https://github.com/h8man/NavMeshPlus/tree/master">NavMeshPlus GitHub page</a>
            </p>

            <h2 className={style_default.Paragraph}>Pixel Art Gun</h2>
            <h3 className={style_default.PaddingLess}>Created by Grenar</h3>
            <p className={style_default.Paragraph}>
                Pixel art asset used for the ranged enemy weapon.<br></br>
                <a href="https://www.dreamstime.com/pixel-art-grey-gun-revolver-pointing-to-right-vintage-image189681621">dreamstime webpage</a>
            </p>

            <h2 className={style_default.Paragraph}>Pixel Art Sword</h2>
            <h3 className={style_default.PaddingLess}>Created by diluck</h3>
            <p className={style_default.Paragraph}>
                Pixel art asset used for the melee enemy weapon.<br></br>
                <a href="https://www.shutterstock.com/image-vector/sword-pixel-art-gaming-item-game-2262029365">shutterstock webpage</a>
            </p>

            <h2 className={style_default.Paragraph}>Pixel Art Gear Icon</h2>
            <h3 className={style_default.PaddingLess}>Created by collaborapix</h3>
            <p className={style_default.Paragraph}>
                Pixel art asset used for gear objective.<br></br>
                <a href="https://www.vecteezy.com/vector-art/24773305-pixel-art-illustration-gear-icon-pixelated-gear-gear-settings-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro">vecteezy webpage</a>
            </p>

            <h2 className={style_default.Paragraph}>Pixel Art Walking Animation</h2>
            <h3 className={style_default.PaddingLess}>Created by pixelboy69</h3>
            <p className={style_default.Paragraph}>
                Pixel art walking animation used as inspiration for walking animation.<br></br>
                <a href="https://www.deviantart.com/pixelboy69/art/Pixel-Art-Walking-Animation-851831457">Deviant Art page</a>
            </p>
        </div>
    );
};

export default Credits;